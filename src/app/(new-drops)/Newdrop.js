"use client";
import React, { useState, useEffect, useMemo } from "react";
import NewInCard from "@/components/homepage/NewInCard";
import useProducts from "@/hooks/useProducts";

const ITEMS_PER_PAGE = 4;
const ITEMS_PER_ROW = 2;

const NewestAtLafetch = () => {
  const { products = [] } = useProducts();
  const [currentPage, setCurrentPage] = useState(0);

  const topProducts = products.slice(0, 12);
  const totalPages = Math.ceil(topProducts.length / ITEMS_PER_PAGE);

  // Auto-rotate products every 3 seconds
  useEffect(() => {
    if (!totalPages) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // Products for current page
  const currentProducts = useMemo(() => {
    const startIdx = currentPage * ITEMS_PER_PAGE;
    return topProducts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [currentPage, topProducts]);

  // Split into rows (2 per row)
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < currentProducts.length; i += ITEMS_PER_ROW) {
      result.push(currentProducts.slice(i, i + ITEMS_PER_ROW));
    }
    return result;
  }, [currentProducts]);

  const handleLike = (productId) => {
    console.log(`Liked product: ${productId}`);
  };

  return (
    <div className="w-full min-h-screen px-20 py-10 bg-white flex flex-col gap-10">
      {/* Header */}
      <div className="flex items-center gap-10">
        <div className="flex-1 h-1 bg-stone-100/90 overflow-hidden relative">
          <div
            className="h-full bg-stone-950 transition-all duration-500"
            style={{
              width: `${100 / totalPages}%`,
              transform: `translateX(${currentPage * 100}%)`,
            }}
          />
        </div>

        <h2 className="w-[772px] text-right text-[44px] font-semibold uppercase text-[#0F0F0F]">
          What's Newest at Lafetch
        </h2>
      </div>

      {/* Content */}
      <div className="flex gap-7">
        {/* Products */}
        <div className="flex-1 flex flex-col gap-7">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-9">
              {row.map((product) => (
                <NewInCard
                  key={product.id}
                  id={product.id}
                  product={product}
                  image={product.imageUrls?.[0]}
                  title={product.title}
                  brand={product?.brand?.name}
                  price={product.basePrice}
                  originalPrice={product.mrp}
                  discount={product.discount || ""}
                  onLike={() => handleLike(product.id)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Right Section - Static */}
        <div className="flex-1 flex flex-col gap-7">
          <div className="h-[496px] rounded-2xl bg-stone-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae"
              alt="Featured Collection"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative h-64">
            <div className="absolute inset-0 bg-stone-50 rounded-2xl" />
            <div className="absolute left-7 top-8 flex flex-col gap-9">
              <div>
                <h3 className="text-[25px] font-[600] text-[#0F0F0F] uppercase font-['Clash_Display']">
                  Top Trending Collection of 2025
                </h3>
                <p className="max-w-[663px] text-[15px] font-[400] text-[#0F0F0FCC] leading-[24px]">
                  Explore our curated collection of the season's must-have
                  styles. From runway-inspired looks to timeless classics, find
                  your next favorite piece here.
                </p>
              </div>

              <button className="px-10 py-4  max-w-[212px] text-[#0F0F0F]  text-[18px]  font-[600] cursor-pointer rounded-full outline outline-2 outline-stone-950 hover:bg-stone-950 hover:text-white transition">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestAtLafetch;
