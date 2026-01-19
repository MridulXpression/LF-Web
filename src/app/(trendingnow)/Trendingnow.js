"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCollectionCard from "@/components/homepage/CollectionCard";
import ViewAllCard from "@/components/homepage/ViewAllCard";
import useCollection from "@/hooks/useCollection";
import BannerGrid from "@/components/collections/BannerGrid";
import useSortProducts from "@/hooks/useSortProducts";
import SortByDropdown from "@/components/SortByDropdown";

const TrendingNowSection = () => {
  const {
    data: collections,
    loading,
    error,
  } = useCollection("displayFor=homepage");
  const [currentPages, setCurrentPages] = useState({});

  // Use the reusable sort hook
  const {
    sortOrders,
    showSortDropdown,
    handleSortChange,
    toggleSortDropdown,
    sortProducts,
  } = useSortProducts();

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

        // Apply sorting before pagination
        const sortOrder = sortOrders[collection.id] || "default";
        const sortedProducts = sortProducts(collection.products, sortOrder);

        // Calculate start and end indices based on cumulative item counts
        let startIndex = 0;
        for (let i = 0; i < currentPage; i++) {
          startIndex += pageItemCounts[i];
        }
        const endIndex = startIndex + (pageItemCounts[currentPage] || 0);

        const displayedProducts = sortedProducts.slice(startIndex, endIndex);

        // Get banners from collection data
        const banners = collection.banners || [];
        const bannerCount = banners.length;

        return (
          <section key={collection.id} className="py-4   px-4 sm:px-6 md:px-10">
            {/* Header */}
            <div className="flex flex-row justify-between items-center gap-2 sm:gap-4 mb-8 sm:mb-10">
              <h1 className="text-[13px]  md:text-[35px] font-semibold  text-black max-w-[200px] md:max-w-[500px] ">
                {collection.name}
              </h1>

              <div className="flex gap-2 sm:gap-3 ml-auto">
                {/* Sort By Dropdown Component */}
                <SortByDropdown
                  collectionId={collection.id}
                  currentSort={sortOrders[collection.id] || "default"}
                  isOpen={showSortDropdown[collection.id]}
                  onToggle={() => toggleSortDropdown(collection.id)}
                  onSortChange={handleSortChange}
                />

                <button
                  onClick={() => handlePrevPage(collection.id)}
                  disabled={currentPage === 0 || shouldDisableChevrons}
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border rounded-full flex items-center justify-center cursor-pointer transition text-sm sm:text-base ${
                    currentPage === 0 || shouldDisableChevrons
                      ? "text-[#A0A0A0]"
                      : "text-black hover:bg-stone-950 hover:text-white"
                  }`}
                >
                  <ChevronLeft
                    size={16}
                    className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                  />
                </button>

                <button
                  onClick={() => handleNextPage(collection.id, totalPages)}
                  disabled={
                    currentPage === totalPages - 1 || shouldDisableChevrons
                  }
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border rounded-full flex items-center justify-center cursor-pointer transition text-sm sm:text-base ${
                    currentPage === totalPages - 1 || shouldDisableChevrons
                      ? "text-[#A0A0A0]"
                      : "text-black hover:bg-stone-950 hover:text-white"
                  }`}
                >
                  <ChevronRight
                    size={16}
                    className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                  />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-nowrap gap-3 sm:gap-4 md:gap-6">
              {displayedProducts.map((product) => {
                // Extract variant sizes from variants array
                const availableSizes = product.variants
                  ? product.variants
                      .map((variant) => {
                        let options = [];
                        try {
                          if (typeof variant.selectedOptions === "string") {
                            options = JSON.parse(variant.selectedOptions);
                          } else if (Array.isArray(variant.selectedOptions)) {
                            options = variant.selectedOptions;
                          }
                        } catch (e) {
                          options = [];
                        }
                        const sizeOption = options.find(
                          (opt) => opt.name === "Size"
                        );
                        return sizeOption?.value || "";
                      })
                      .filter(Boolean)
                  : [];

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
                  variants: product.variants || [],
                  availableSizes: availableSizes,
                };

                return (
                  <div key={product.id} className="w-full">
                    <ProductCollectionCard product={transformedProduct} />
                  </div>
                );
              })}

              {currentPage === totalPages - 1 && (
                <div className="w-full">
                  <ViewAllCard
                    onClick={() => {
                      window.location.href = `/products?collectionId=${collection.id}`;
                    }}
                  />
                </div>
              )}
            </div>

            {/* Banners Section */}
            {bannerCount > 0 && (
              <div className="mt-6  -mx-4 sm:-mx-6 md:-mx-10">
                <BannerGrid
                  banners={banners}
                  bannerCount={bannerCount}
                  displayFor="homepage"
                />
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default TrendingNowSection;
