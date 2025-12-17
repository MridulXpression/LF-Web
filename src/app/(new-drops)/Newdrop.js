"use client";
import React, { useState, useEffect, useMemo } from "react";
import NewInCard from "@/components/homepage/NewInCard";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    }, 5000);

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
    <div className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 bg-white flex flex-col gap-6 sm:gap-8 md:gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="flex-1 h-1 bg-stone-100/90 overflow-hidden relative">
          <div
            className="h-full bg-stone-950 transition-all duration-500"
            style={{
              width: `${100 / totalPages}%`,
              transform: `translateX(${currentPage * 100}%)`,
            }}
          />
        </div>

        <h2 className="w-full md:w-[772px] text-left md:text-right text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold uppercase text-[#0F0F0F]">
          What's Newest at Lafetch
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-7">
        {/* Products */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-7 lg:gap-9"
            >
              {row.map((product) => (
                <div key={product.id} className="w-full sm:flex-1">
                  <NewInCard
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
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Section - Static */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          <div className="h-48 sm:h-72 md:h-96 lg:h-[496px] rounded-xl md:rounded-2xl bg-stone-200 overflow-hidden">
            <Image
              src="/images/carasouel.png"
              alt="Featured Collection"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative h-48 sm:h-56 md:h-64 rounded-xl md:rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-stone-50 rounded-xl md:rounded-2xl" />
            <div className="absolute inset-0 left-4 sm:left-5 md:left-6 lg:left-7 top-4 sm:top-5 md:top-6 lg:top-8 right-4 sm:right-5 md:right-6 lg:right-7 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-9">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-[600] text-[#0F0F0F] uppercase font-['Clash_Display']">
                  Top Trending Collection of 2025
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-[15px] font-[400] text-[#0F0F0FCC] leading-5 sm:leading-6 md:leading-7 lg:leading-[24px]">
                  Explore our curated collection of the season's must-have
                  styles. From runway-inspired looks to timeless classics, find
                  your next favorite piece here.
                </p>
              </div>

              <Link
                href="/products"
                className="px-6 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 max-w-[212px] text-[#0F0F0F] text-sm sm:text-base md:text-lg lg:text-[18px] font-[600] cursor-pointer rounded-full outline outline-2 outline-stone-950 hover:bg-stone-950 hover:text-white transition w-fit flex items-center gap-2 sm:gap-3 group"
              >
                View All
                <ArrowRight className="text-black group-hover:text-white rotate-[-45deg]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestAtLafetch;
