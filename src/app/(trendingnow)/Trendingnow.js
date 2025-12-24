"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCollectionCard from "@/components/homepage/CollectionCard";
import ViewAllCard from "@/components/homepage/ViewAllCard";
import useCollection from "@/hooks/useCollection";
import BannerGrid from "@/components/collections/BannerGrid";

const TrendingNowSection = () => {
  const { data: collections, loading, error } = useCollection();
  const [currentPages, setCurrentPages] = useState({});

  // Banner configuration: specify how many banners to show below each collection
  const bannerConfig = {
    0: 2, // First collection: 2 banners
    1: 3, // Second collection: 3 banners
  };

  // Pagination: 4 products, then 4, then 3 (total 11)
  const pageItemCounts = [4, 4, 3];

  const handlePrevPage = (collectionId) => {
    setCurrentPages((prev) => ({
      ...prev,
      [collectionId]: Math.max((prev[collectionId] || 0) - 1, 0),
    }));
  };

  const handleNextPage = (collectionId, totalPages) => {
    setCurrentPages((prev) => ({
      ...prev,
      [collectionId]: Math.min((prev[collectionId] || 0) + 1, totalPages - 1),
    }));
  };

  if (loading) {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 md:px-10">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-stone-200 border-t-stone-950"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 md:px-10">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-red-500">
            Error loading collections. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {collections?.map((collection, collectionIndex) => {
        // Don't show section if no products
        if (!collection.products || collection.products.length === 0) {
          return null;
        }

        const currentPage = currentPages[collection.id] || 0;
        const totalPages = pageItemCounts.length;
        const totalProducts = collection.products.length;
        const shouldDisableChevrons = totalProducts <= 5;

        // Calculate start and end indices based on cumulative item counts
        let startIndex = 0;
        for (let i = 0; i < currentPage; i++) {
          startIndex += pageItemCounts[i];
        }
        const endIndex = startIndex + (pageItemCounts[currentPage] || 0);

        const displayedProducts = collection.products.slice(
          startIndex,
          endIndex
        );

        // Get banner count for this collection
        const bannerCount = bannerConfig[collectionIndex] || 0;
        // Calculate starting banner number (1-indexed globally)
        let startingBannerNumber = 1;
        for (let i = 0; i < collectionIndex; i++) {
          startingBannerNumber += bannerConfig[i] || 0;
        }
        const banners = Array.from({ length: bannerCount }, (_, i) => ({
          id: startingBannerNumber + i,
        }));

        return (
          <section
            key={collection.id}
            className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h1 className="text-xl sm:text-2xl md:text-[38px] font-semibold uppercase text-black w-full sm:w-auto">
                {collection.name}
              </h1>

              <div className="flex gap-2 sm:gap-3 ml-auto">
                {/* Sort By Button */}
                <button className="h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white rounded-lg sm:rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-950 inline-flex justify-center items-center gap-1 sm:gap-1.5">
                  <div className="flex justify-start items-center gap-1 sm:gap-1.5">
                    <div className="text-center justify-start text-stone-950 text-xs sm:text-sm md:text-lg lg:text-xl font-medium leading-5 sm:leading-6 tracking-wide">
                      Sort By
                    </div>
                    <Image
                      src="/images/sort.svg"
                      alt="Sort"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </div>
                </button>
                <button
                  onClick={() => handlePrevPage(collection.id)}
                  disabled={currentPage === 0 || shouldDisableChevrons}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border rounded-full flex items-center justify-center cursor-pointer transition text-sm sm:text-base ${
                    currentPage === 0 || shouldDisableChevrons
                      ? "text-[#A0A0A0]"
                      : "text-black hover:bg-stone-950 hover:text-white"
                  }`}
                >
                  <ChevronLeft
                    size={18}
                    className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </button>

                <button
                  onClick={() => handleNextPage(collection.id, totalPages)}
                  disabled={
                    currentPage === totalPages - 1 || shouldDisableChevrons
                  }
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border rounded-full flex items-center justify-center cursor-pointer transition text-sm sm:text-base ${
                    currentPage === totalPages - 1 || shouldDisableChevrons
                      ? "text-[#A0A0A0]"
                      : "text-black hover:bg-stone-950 hover:text-white"
                  }`}
                >
                  <ChevronRight
                    size={18}
                    className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto">
              {displayedProducts.map((product) => {
                // Transform the product data to match CollectionCard requirements
                const transformedProduct = {
                  id: product.id,
                  name: product.title || product.name,
                  brand: product.brand?.name || product.brand,
                  price: product.basePrice || product.price,
                  originalPrice: product.mrp,
                  description: product.description || "",
                  images: product.imageUrls || [product.image],
                  hasOverlay: product.hasOverlay || false,
                };

                return (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-[330px]"
                  >
                    <ProductCollectionCard
                      product={transformedProduct}
                      onLike={(id) => console.log("Liked:", id)}
                    />
                  </div>
                );
              })}

              {currentPage === totalPages - 1 && (
                <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-80">
                  <ViewAllCard
                    onClick={() => console.log("View all clicked")}
                  />
                </div>
              )}
            </div>

            {/* Banners Section */}
            {bannerCount > 0 && (
              <div className="mt-8 sm:mt-10 md:mt-12">
                <BannerGrid banners={banners} bannerCount={bannerCount} />
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default TrendingNowSection;
