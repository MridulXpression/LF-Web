"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Share2, Star } from "lucide-react";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import SizeChartModal from "@/components/SizeChartModal";

const ProductInfo = ({
  title,
  brand,
  rating,
  reviews,
  mrp,
  sizes,
  colors,
  brandId,
  superCatId,
  catId,
  subcatId,
  onVariantChange,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [sizeChartData, setSizeChartData] = useState(null);
  const [sizeChartLoading, setSizeChartLoading] = useState(false);

  // ✅ Initialize selected size, color and variant from localStorage or first available
  useEffect(() => {
    if (sizes && sizes.length > 0) {
      const storedVariantId = localStorage.getItem("selectedVariantId");
      const variantFromStorage = sizes.find(
        (s) => s.variantId === Number(storedVariantId)
      );

      const initialVariant =
        variantFromStorage || sizes.find((s) => s.available) || sizes[0];

      setSelectedSize(initialVariant.value);
      setSelectedColor(initialVariant.color || null);
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
    setSelectedColor(size.color || null);
    setSelectedVariant(size);

    if (size.variantId) {
      localStorage.setItem("selectedVariantId", size.variantId);
    }
  };

  // ✅ Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color.value);
    setSelectedVariant(color);

    if (color.variantId) {
      localStorage.setItem("selectedVariantId", color.variantId);
    }
  };

  // notify parent when selectedVariant changes
  useEffect(() => {
    if (onVariantChange) onVariantChange(selectedVariant);
  }, [selectedVariant, onVariantChange]);

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

  // ✅ Check if we have sizes and/or colors to display
  const hasSizes = sizes && sizes.length > 0;
  const hasColors = colors && colors.length > 0;

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

      {/* Color Selection - Show only if colors exist */}
      {hasColors && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Select Color
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <div key={color.value} className="flex flex-col items-center">
                <button
                  onClick={() => handleColorSelect(color)}
                  disabled={!color.available}
                  className={`min-w-[100px] px-4 py-3 border text-sm font-semibold transition-all rounded-md cursor-pointer
            ${
              !color.available
                ? "bg-white text-gray-300 border-gray-200 line-through cursor-not-allowed"
                : selectedColor === color.value
                ? "border-pink-600 text-pink-600 bg-white"
                : "border-gray-300 text-gray-700 bg-white hover:border-gray-400"
            }`}
                >
                  {color.label}
                </button>

                {/* ✅ Show "Out of Stock" text below disabled button */}
                {/* {!color.available && (
                  <span className="text-[11px] text-red-500 mt-1 font-medium">
                    Out of Stock
                  </span>
                )} */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection - Show only if sizes exist */}
      {hasSizes && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Select Size
            </h3>
            <button
              onClick={async () => {
                // fetch size chart when clicked
                try {
                  setSizeChartLoading(true);
                  const resp = await axiosHttp.get(
                    `${endPoints.fetchSizeChart}?brandId=${brandId}&superCatId=${superCatId}&catId=${catId}&subCatId=${subcatId}`
                  );
                  setSizeChartData(resp?.data?.data ?? null);
                  setSizeChartOpen(true);
                } catch (err) {
                  console.error("Error fetching size chart", err);
                  setSizeChartData(null);
                  setSizeChartOpen(true);
                } finally {
                  setSizeChartLoading(false);
                }
              }}
              className="text-sm text-pink-600 font-bold hover:text-pink-700 cursor-pointer"
            >
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
                {/* {!size.available && (
                  <span className="text-[11px] text-red-500 mt-1 font-medium">
                    Out of Stock
                  </span>
                )} */}
              </div>
            ))}
          </div>
        </div>
      )}

      <SizeChartModal
        open={sizeChartOpen}
        onClose={() => setSizeChartOpen(false)}
        data={sizeChartData}
        loading={sizeChartLoading}
      />
    </div>
  );
};

export default ProductInfo;
