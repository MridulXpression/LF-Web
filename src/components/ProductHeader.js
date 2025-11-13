"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Share2, Star } from "lucide-react";

const ProductInfo = ({ title, brand, rating, reviews, mrp, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  // ✅ Initialize selected size and variant from localStorage or first available
  useEffect(() => {
    if (sizes && sizes.length > 0) {
      const storedVariantId = localStorage.getItem("selectedVariantId");
      const variantFromStorage = sizes.find(
        (s) => s.variantId === Number(storedVariantId)
      );

      const initialVariant =
        variantFromStorage || sizes.find((s) => s.available) || sizes[0];

      setSelectedSize(initialVariant.value);
      setSelectedVariant(initialVariant);

      // Store variant in localStorage
      if (initialVariant.variantId) {
        localStorage.setItem("selectedVariantId", initialVariant.variantId);
      }
    }
  }, [sizes]);

  // ✅ Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size.value);
    setSelectedVariant(size);

    if (size.variantId) {
      localStorage.setItem("selectedVariantId", size.variantId);
    }
  };

  // ✅ Compute price based on selected variant
  const variantPrice = useMemo(() => {
    if (selectedVariant?.price) return selectedVariant.price;
    return sizes?.[0]?.price || 0;
  }, [selectedVariant, sizes]);

  // ✅ Compute discount
  const discount = useMemo(() => {
    if (mrp && variantPrice) {
      const mrpVal = parseFloat(mrp);
      const priceVal = parseFloat(variantPrice);
      if (mrpVal > priceVal) {
        return Math.round(((mrpVal - priceVal) / mrpVal) * 100);
      }
    }
    return 0;
  }, [mrp, variantPrice]);

  return (
    <div className="border-b pb-6">
      {/* Header */}
      <div className="space-y-3 mb-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-normal text-gray-900 mt-1">{title}</h1>
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {brand}
            </h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-0.5 bg-teal-700 text-white rounded text-xs font-semibold">
            <span>{rating}</span>
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-sm text-gray-500">{reviews} Ratings</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-2xl font-bold text-gray-900">
          ₹{variantPrice}
        </span>
        <span className="text-base text-gray-400 line-through">MRP ₹{mrp}</span>
        <span className="text-base text-orange-500 font-semibold">
          ({discount}% OFF)
        </span>
      </div>

      <div className="text-xs text-green-700 font-semibold mb-6">
        inclusive of all taxes
      </div>

      {/* Size Selection */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            Select Size
          </h3>
          <button className="text-sm text-pink-600 font-bold hover:text-pink-700">
            SIZE CHART &gt;
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          {sizes.map((size) => (
            <div key={size.value} className="flex flex-col items-center">
              <button
                onClick={() => handleSizeSelect(size)}
                disabled={!size.available}
                className={`min-w-[60px] px-4 py-3 border text-sm font-semibold transition-all rounded-md cursor-pointer
          ${
            !size.available
              ? "bg-white text-gray-300 border-gray-200 line-through cursor-not-allowed"
              : selectedSize === size.value
              ? "border-pink-600 text-pink-600 bg-white"
              : "border-gray-300 text-gray-700 bg-white hover:border-gray-400"
          }`}
              >
                {size.label}
              </button>

              {/* ✅ Show "Out of Stock" text below disabled button */}
              {!size.available && (
                <span className="text-[11px] text-red-500 mt-1 font-medium">
                  Out of Stock
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
