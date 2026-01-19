"use client";
import Link from "next/link";
import ProductCollectionCard from "@/components/homepage/CollectionCard";
import ExploreAllCard from "@/components/homepage/ExploreAllCard";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useSortProducts from "@/hooks/useSortProducts";
import SortByDropdown from "@/components/SortByDropdown";

const NewInSection = () => {
  const query = "gender=2";
  const { products = [] } = useProducts(query);
  const [currentPage, setCurrentPage] = useState(0);

  // Use the reusable sort hook
  const {
    sortOrders,
    showSortDropdown,
    handleSortChange,
    toggleSortDropdown,
    sortProducts,
  } = useSortProducts();

  // Pagination: 8 products, then 8, then 7 (total 23)
  const pageItemCounts = [8, 8, 7];
  const totalPages = pageItemCounts.length;
  const totalProducts = products.length;
  const shouldDisableChevrons = totalProducts <= 8;

  // Apply sorting before pagination
  const sortOrder = sortOrders["newin"] || "default";
  const sortedProducts = sortProducts(products, sortOrder);

  // Calculate start and end indices based on cumulative item counts
  let startIndex = 0;
  for (let i = 0; i < currentPage; i++) {
    startIndex += pageItemCounts[i];
  }
  const endIndex = startIndex + (pageItemCounts[currentPage] || 0);

  const visibleProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <section className=" px-4 bg-white">
      <div className="w-full md:p-[20px] lg:p-[50px]">
        {/* Section Title with Navigation */}
        <div className="flex flex-row justify-between items-center gap-2 sm:gap-4 mb-8 sm:mb-10">
          <h2 className="text-[20px] md:text-4xl font-bold text-black tracking-wide">
            NEW IN
          </h2>

          <div className="flex gap-2 sm:gap-3 ml-auto">
            {/* Sort By Dropdown Component */}
            <SortByDropdown
              collectionId="newin"
              currentSort={sortOrders["newin"] || "default"}
              isOpen={showSortDropdown["newin"]}
              onToggle={() => toggleSortDropdown("newin")}
              onSortChange={handleSortChange}
            />

            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0 || shouldDisableChevrons}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border rounded-full flex items-center justify-center cursor-pointer transition text-sm sm:text-base ${
                currentPage === 0 || shouldDisableChevrons
                  ? "text-[#A0A0A0] border-[#A0A0A0]"
                  : "text-black border-black hover:bg-stone-950 hover:text-white"
              }`}
            >
              <ChevronLeft size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1 || shouldDisableChevrons}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border rounded-full flex items-center justify-center cursor-pointer transition text-sm sm:text-base ${
                currentPage === totalPages - 1 || shouldDisableChevrons
                  ? "text-[#A0A0A0] border-[#A0A0A0]"
                  : "text-black border-black hover:bg-stone-950 hover:text-white"
              }`}
            >
              <ChevronRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-items-center">
          {visibleProducts.map((product, index) => {
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
              <ProductCollectionCard
                key={product.id}
                product={transformedProduct}
                onLike={() => {}}
              />
            );
          })}

          {/* Explore All Card on last page */}
          {currentPage === totalPages - 1 && (
            <div className="w-full">
              <ExploreAllCard
                onClick={() => {
                  window.location.href = "/products?superCatId=2";
                }}
              />
            </div>
          )}
        </div>
      </div>
      {/* Toaster Component */}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#9c90ff",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#9c90ff",
              secondary: "#fff",
            },
          },
        }}
      />
    </section>
  );
};

export default NewInSection;
