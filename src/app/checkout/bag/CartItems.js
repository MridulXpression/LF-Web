"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderSummary from "@/components/OrderSummary";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import CartProductCard from "@/components/CartProductCard";
import useGetCoupons from "@/hooks/useGetCoupons";
import Link from "next/link";
import DeleteConfirmModal from "@/components/DeleteModal";
import { openPhoneAuthModal } from "@/redux/slices/loginmodalSlice";
// PhoneAuthModal is now rendered globally in Providers.js
import {
  removeFromCart,
  setCartItems,
  updateQuantity,
  setItemSelected,
  setSelectedCartItems,
} from "@/redux/slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const isInitialMount = useRef(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const getCoupons = useGetCoupons();

  const cartItemsFromRedux = useSelector((state) => state.cart?.items || []);

  // Get userId from Redux
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  // Fetch cart items from API
  useEffect(() => {
    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  // Auto-select all items ONLY when products load initially
  useEffect(() => {
    if (products.length > 0 && isInitialMount.current) {
      setSelectedItems(new Set(products.map((p) => p.cartItemId)));
      // keep redux selection in sync
      dispatch(setSelectedCartItems(products.map((p) => p.cartItemId)));
      isInitialMount.current = false;
    }
  }, [products]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await axiosHttp.get(`/cart-items/${userId}`);

      if (response.data.status === 200 && response.data.data) {
        // Transform API data to component format
        const transformedData = response.data.data.map((item) => ({
          id: item.id,
          cartItemId: item.id,
          productId: item.productId,
          variantId: item.variantId,
          name: item.product.title,
          description:
            item.product.shortDescription || item.product.description,
          image:
            item.product_variant.imageSrc || item.product.imageUrls[0] || "",
          imageUrls: item.product.imageUrls,
          price: item.product_variant.price,
          originalPrice: item.product.mrp || item.product.basePrice,
          size: item.product_variant.title,
          // Default quantity from API (if provided) — we'll merge Redux/local values below
          quantity: item.quantity || 1,
          availableSizes: [item.product_variant.title],
          type: item.product.type,
          tags: item.product.tags,
          hasCOD: item.product.hasCOD,
          hasExchange: item.product.hasExchange,
          exchangeDays: item.product.exchangeDays,
        }));

        // Try to restore saved checkout (localStorage) quantities if Redux doesn't have them
        let savedCheckout = null;
        try {
          const raw = localStorage.getItem(`lafetch_checkout_${userId}`);
          if (raw) savedCheckout = JSON.parse(raw);
        } catch (e) {}

        const merged = transformedData.map((t) => {
          // Prefer Redux quantity
          const reduxMatch = cartItemsFromRedux.find(
            (ci) => ci.cartItemId === t.cartItemId
          );
          if (reduxMatch && typeof reduxMatch.quantity === "number") {
            return { ...t, quantity: reduxMatch.quantity };
          }

          // Next prefer saved checkout (localStorage)
          if (savedCheckout && Array.isArray(savedCheckout.items)) {
            const savedMatch = savedCheckout.items.find(
              (s) =>
                (s.cartItemId && s.cartItemId === t.cartItemId) ||
                (s.productId === t.productId && s.variantId === t.variantId)
            );
            if (savedMatch && typeof savedMatch.quantity === "number") {
              return { ...t, quantity: savedMatch.quantity };
            }
          }

          // Fallback to API quantity already present on t
          return t;
        });

        setProducts(merged);

        // Keep Redux cart items in sync but preserve existing selected flags
        const payload = merged.map((m) => ({
          ...m,
          cartItemId: m.cartItemId,
          variantId: m.variantId || null,
          selected:
            (
              cartItemsFromRedux.find((ci) => ci.cartItemId === m.cartItemId) ||
              {}
            ).selected ?? true,
        }));

        dispatch(setCartItems(payload)); // keep Redux in sync with merged quantities

        // Try to restore saved checkout selection (match by productId+variantId)
        try {
          const saved = localStorage.getItem(`lafetch_checkout_${userId}`);
          if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.items && Array.isArray(parsed.items)) {
              const savedCartItemIds = new Set();
              parsed.items.forEach((s) => {
                const match = transformedData.find(
                  (t) =>
                    t.productId === s.productId && t.variantId === s.variantId
                );
                if (match) savedCartItemIds.add(match.cartItemId);
              });
              if (savedCartItemIds.size > 0) {
                setSelectedItems(savedCartItemIds);
                // mirror selection into redux
                dispatch(setSelectedCartItems(Array.from(savedCartItemIds)));
              }
            }
          }
        } catch (e) {}
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // Persist checkout state to localStorage whenever products or selection changes
  useEffect(() => {
    if (!userId) return;
    try {
      const key = `lafetch_checkout_${userId}`;
      const existingRaw = localStorage.getItem(key);
      let existing = {};
      if (existingRaw) existing = JSON.parse(existingRaw);

      const itemsToSave = products.map((p) => ({
        cartItemId: p.cartItemId,
        productId: p.productId,
        variantId: p.variantId,
        productName: p.name,
        quantity: p.quantity || 1,
        unitPrice: p.price || 0,
        // No discount/tax for now
        discount: 0,
        tax: 0,
        total: +((p.price || 0) * (p.quantity || 1)).toFixed(2),
        sku: p.sku || "",
        hsn: p.hsn || "",
        selected: selectedItems.has(p.cartItemId),
      }));

      const merged = {
        ...(existing || {}),
        items: itemsToSave,
      };
      localStorage.setItem(key, JSON.stringify(merged));
    } catch (e) {}
  }, [products, selectedItems, userId]);

  const handleRemove = async (productId) => {
    try {
      const isDeleted = await axiosHttp.delete(endPoints.deleteCartItem, {
        data: {
          userId: userId,
          productId: productId,
        },
      });
      if (isDeleted) {
        // Remove from selectedItems before fetching
        const itemToRemove = products.find((p) => p.productId === productId);
        if (itemToRemove) {
          setSelectedItems((prev) => {
            const newSet = new Set(prev);
            newSet.delete(itemToRemove.cartItemId);
            return newSet;
          });
        }
        fetchCartItems();
      }
    } catch (error) {}
  };

  const handleQuantityChange = async (cartItemId, quantity) => {
    try {
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.map((p) =>
          p.cartItemId === cartItemId ? { ...p, quantity } : p
        );

        return updatedProducts;
      });
      // persist quantity in redux as well
      dispatch(updateQuantity({ cartItemId, quantity }));
    } catch (error) {}
  };

  const handleSizeChange = async (cartItemId, size) => {
    try {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.cartItemId === cartItemId ? { ...p, size } : p
        )
      );
    } catch (error) {}
  };

  // Handle individual item selection
  const handleToggleSelect = (cartItemId) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cartItemId)) {
        newSet.delete(cartItemId);
        // update redux
        dispatch(setItemSelected({ cartItemId, selected: false }));
      } else {
        newSet.add(cartItemId);
        dispatch(setItemSelected({ cartItemId, selected: true }));
      }
      return newSet;
    });
  };

  // Handle select all/deselect all
  const handleSelectAll = () => {
    if (selectedItems.size === products.length) {
      setSelectedItems(new Set());
      dispatch(setSelectedCartItems([]));
    } else {
      setSelectedItems(new Set(products.map((p) => p.cartItemId)));
      dispatch(setSelectedCartItems(products.map((p) => p.cartItemId)));
    }
  };

  // Filter selected products for checkout
  const selectedProducts = React.useMemo(() => {
    const filtered = products.filter((p) => selectedItems.has(p.cartItemId));

    return filtered;
  }, [products, selectedItems]);

  const openDeleteModal = (productId) => {
    setDeleteTargetId(productId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    await handleRemove(deleteTargetId);

    // ✅ Remove from Redux store as well
    const deletedProduct = products.find((p) => p.productId === deleteTargetId);
    if (deletedProduct) {
      dispatch(removeFromCart(deletedProduct.variantId));
    }

    setIsDeleteModalOpen(false);
  };

  // Load cart from Redux or localStorage if user is not logged in
  useEffect(() => {
    if (!userId) {
      try {
        // First priority: Use Redux cart items if they exist
        if (cartItemsFromRedux && cartItemsFromRedux.length > 0) {
          // Transform Redux items to component format
          const transformedReduxItems = cartItemsFromRedux.map((item) => {
            // Find the selected variant
            const selectedVariant =
              item.variants?.find(
                (v) => v.id?.toString() === item.variantId?.toString()
              ) || item.variants?.[0];

            return {
              id: item.id,
              cartItemId: item.variantId || item.id,
              productId: item.id,
              variantId: item.variantId || selectedVariant?.id,
              name: item.title,
              description: item.shortDescription || item.description,
              image: item.imageUrls?.[0] || selectedVariant?.imageSrc || "",
              imageUrls: item.imageUrls || [],
              price: selectedVariant?.price || item.basePrice || 0,
              originalPrice: item.mrp || item.basePrice || 0,
              size: selectedVariant?.title || "One Size",
              quantity: item.quantity || 1,
              availableSizes: item.variants?.map((v) => v.title) || [
                selectedVariant?.title,
              ],
              type: item.type || "",
              tags: item.tags || [],
              hasCOD: item.hasCOD,
              hasExchange: item.hasExchange,
              exchangeDays: item.exchangeDays,
              selected: item.selected !== false,
            };
          });

          setProducts(transformedReduxItems);
          setSelectedItems(
            new Set(transformedReduxItems.map((p) => p.cartItemId))
          );
          setLoading(false);
          return;
        }

        // Fallback: Try to get any saved checkout data from localStorage
        const savedKeys = Object.keys(localStorage).filter((key) =>
          key.startsWith("lafetch_checkout_")
        );

        if (savedKeys.length > 0) {
          // Get the most recent saved checkout
          const lastKey = savedKeys[savedKeys.length - 1];
          const raw = localStorage.getItem(lastKey);
          if (raw) {
            const saved = JSON.parse(raw);
            if (saved.items && Array.isArray(saved.items)) {
              setProducts(saved.items);
              setSelectedItems(new Set(saved.items.map((p) => p.cartItemId)));
              setLoading(false);
            }
          }
        } else {
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
      }
    }
  }, [userId, cartItemsFromRedux]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-black">Loading your cart...</div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 mt-[100px]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-8 flex items-center justify-center gap-2 text-sm">
            <Link
              href="/checkout/bag"
              className="text-black underline decoration-[#988BFF] decoration-[2px] font-bold"
            >
              BAG
            </Link>
            <span className="text-black">--------</span>
            <Link href="/checkout/address" className="text-black ">
              ADDRESS
            </Link>
            <span className="text-black">--------</span>
            <span className="text-black">PAYMENT</span>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-black">SHOPPING BAG</h1>
            <p className="text-gray-600">{products.length} Products</p>
          </div>

          {/* Main Content */}
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Your cart is waiting</p>
              <button
                onClick={() => (window.location.href = "/products")}
                className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Side - Product Cards */}
              <div className="lg:col-span-2">
                {/* Select All Checkbox */}
                <div className="mb-4 flex items-center gap-2  p-4 rounded-lg ">
                  <input
                    type="checkbox"
                    checked={
                      selectedItems.size === products.length &&
                      products.length > 0
                    }
                    onChange={handleSelectAll}
                    className="w-5 h-5 cursor-pointer accent-black"
                  />
                  <span className="text-sm font-medium text-black">
                    Select All ({selectedItems.size}/{products.length})
                  </span>
                </div>

                {/* Product Cards */}
                <div className="">
                  {products.map((product) => (
                    <CartProductCard
                      key={product.cartItemId}
                      product={product}
                      onRemove={() => openDeleteModal(product.productId)}
                      onQuantityChange={handleQuantityChange}
                      onSizeChange={handleSizeChange}
                      isSelected={selectedItems.has(product.cartItemId)}
                      onToggleSelect={handleToggleSelect}
                    />
                  ))}

                  <DeleteConfirmModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                    title="Remove Item"
                    message="Are you sure you want to remove this item from your cart?"
                    confirmText="Remove"
                  />
                </div>
              </div>

              {/* Right Side - Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary
                  key={`order-summary-${selectedProducts
                    .map((p) => `${p.cartItemId}-${p.quantity}`)
                    .join("-")}`}
                  products={selectedProducts}
                  coupons={getCoupons}
                  isUserLoggedIn={!!userId}
                  onProceedWithoutLogin={() => {
                    if (!userId) {
                      dispatch(openPhoneAuthModal("checkout"));
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
