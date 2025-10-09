"use client";
import React, { useState, useEffect, use } from "react";
import { useSelector } from "react-redux";

import OrderSummary from "@/components/OrderSummary";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import CartProductCard from "@/components/CartProductCard";
import useGetCoupons from "@/hooks/useGetCoupons";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCoupons = useGetCoupons();
  console.log("Available Coupons:", getCoupons);

  // Get userId from Redux
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  // Fetch cart items from API
  useEffect(() => {
    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await axiosHttp.get(`/cart-items/${userId}`);

      if (response.data.status === 200 && response.data.data) {
        // Transform API data to component format
        const transformedData = response.data.data.map((item) => ({
          id: item.id,
          cartItemId: item.id, // Keep original cart item ID for deletion
          productId: item.productId,
          variantId: item.variantId,
          name: item.product.title,
          description:
            item.product.shortDescription || item.product.description,
          image: item.product.imageUrls[0],
          imageUrls: item.product.imageUrls,
          price: item.product_variant.price,
          originalPrice: item.product.mrp || item.product.basePrice,
          size: item.product_variant.title, // Size from variant
          quantity: 1, // Default quantity, adjust if API provides this
          availableSizes: [item.product_variant.title], // You may need to fetch all variants for available sizes
          type: item.product.type,
          tags: item.product.tags,
          hasCOD: item.product.hasCOD,
          hasExchange: item.product.hasExchange,
          exchangeDays: item.product.exchangeDays,
        }));
        console.log("🛒 Transformed Cart Data:", transformedData);
        setProducts(transformedData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      // Delete from API with userId and productId
      await axiosHttp.delete(endPoints.deleteCartItem, {
        data: {
          userId: userId,
          productId: productId,
        },
      });

      // Update local state
      setProducts(products.filter((p) => p.productId !== productId));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const handleQuantityChange = async (cartItemId, quantity) => {
    try {
      // Update quantity in API if you have an endpoint
      // await axiosHttp.patch(`${endPoints.updateCartItem}/${cartItemId}`, { quantity });

      // Update local state
      setProducts(
        products.map((p) =>
          p.cartItemId === cartItemId ? { ...p, quantity } : p
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleSizeChange = async (cartItemId, size) => {
    try {
      // Update size/variant in API if you have an endpoint
      // await axiosHttp.patch(`${endPoints.updateCartItem}/${cartItemId}`, { size });

      // Update local state
      setProducts(
        products.map((p) => (p.cartItemId === cartItemId ? { ...p, size } : p))
      );
    } catch (error) {
      console.error("Error updating size:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading your cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center gap-2 text-sm">
          <span className="text-black underline decoration-[#988BFF] decoration-[2px] font-bold ">
            BAG
          </span>

          <span className="text-black">--------</span>
          <span className="text-black">ADDRESS</span>
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
              onClick={() => (window.location.href = "/shop")}
              className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - Product Cards */}
            <div className="lg:col-span-2">
              {products.map((product) => (
                <CartProductCard
                  key={product.cartItemId}
                  product={product}
                  onRemove={handleRemove}
                  onQuantityChange={handleQuantityChange}
                  onSizeChange={handleSizeChange}
                />
              ))}
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary products={products} coupons={getCoupons} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
