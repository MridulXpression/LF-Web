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
import { removeFromCart, setCartItems } from "@/redux/slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const isInitialMount = useRef(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const getCoupons = useGetCoupons();

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
          image: item.product.imageUrls[0],
          imageUrls: item.product.imageUrls,
          price: item.product_variant.price,
          originalPrice: item.product.mrp || item.product.basePrice,
          size: item.product_variant.title,
          quantity: 1,
          availableSizes: [item.product_variant.title],
          type: item.product.type,
          tags: item.product.tags,
          hasCOD: item.product.hasCOD,
          hasExchange: item.product.hasExchange,
          exchangeDays: item.product.exchangeDays,
        }));

        setProducts(transformedData);
        dispatch(setCartItems(transformedData)); // ✅ keep Redux count in sync

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
              if (savedCartItemIds.size > 0) setSelectedItems(savedCartItemIds);
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
      } else {
        newSet.add(cartItemId);
      }
      return newSet;
    });
  };

  // Handle select all/deselect all
  const handleSelectAll = () => {
    if (selectedItems.size === products.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(products.map((p) => p.cartItemId)));
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

  if (!userId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-black font-medium">
          Please log in to see your cart.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-black">Loading your cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
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
            <p className="text-gray-600 text-lg">Your shopping bag is empty</p>
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
                    onRemove={() => openDeleteModal(product.productId)} // 👈 change here
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
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
