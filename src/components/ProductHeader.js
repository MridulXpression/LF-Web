"use client";
import React, { useState, useEffect } from "react";
import { Share2, Star } from "lucide-react";

const ProductInfo = ({
  title,
  brand,
  rating,
  reviews,
  price,
  mrp,
  discount,
  sizes,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);

  // ✅ Automatically select the first available size on mount
  useEffect(() => {
    if (sizes && sizes.length > 0) {
      const firstAvailableSize = sizes.find((s) => s.available) || sizes[0];
      setSelectedSize(firstAvailableSize.value);

      if (firstAvailableSize.variantId) {
        localStorage.setItem("selectedVariantId", firstAvailableSize.variantId);
      }
    }
  }, [sizes]);

  // ✅ Handle manual size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size.value);

    if (size.variantId) {
      localStorage.setItem("selectedVariantId", size.variantId);
    }
  };

  return (
    <div className="border-b pb-6">
      {/* Header Section */}
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

      {/* Pricing Section */}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-2xl font-bold text-gray-900">₹{price}</span>
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

        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => handleSizeSelect(size)}
              disabled={!size.available}
              className={`min-w-[60px] px-4 py-3 border text-sm font-semibold transition-all cursor-pointer ${
                !size.available
                  ? "bg-white text-gray-300 border-gray-200 line-through cursor-not-allowed"
                  : selectedSize === size.value
                  ? "border-pink-600 text-pink-600 bg-white"
                  : "border-gray-300 text-gray-700 bg-white hover:border-gray-400"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
