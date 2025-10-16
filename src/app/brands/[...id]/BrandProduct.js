// App.jsx
"use client";
import HeroBanner from "@/components/BrandBanner";
import BrandProductCard from "@/components/BrandProductCard";
import SearchFilterBar from "@/components/BrandSearch";
import useGetBrandsProducts from "@/hooks/useViewBrandsProduct";
import { useParams } from "next/navigation";

import React, { useState } from "react";

const BrandProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const { id } = useParams(); // ✅ get the brandId from URL (e.g., /brands/12 → id = "12")

  const getBrandsProducts = useGetBrandsProducts(id);

  // Extract brand info and products from API response
  const brandInfo = getBrandsProducts?.brandInfo || {};
  const products = getBrandsProducts?.products || [];

  // Get brand name and description
  const brandName = brandInfo.name || "Brand Name";
  const brandDescription = brandInfo.description || "Brand Description";
  const brandVideo = brandInfo.video;

  const categories = ["All", "Men", "Women", "Accessories", "Sale"];

  // Show loading state
  if (getBrandsProducts?.loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  // Show error state
  if (getBrandsProducts?.error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-lg text-red-500">Error loading brand data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroBanner
        brandName={brandName}
        description={brandDescription}
        logo={brandInfo.logo}
        videoURL={brandVideo}
      />

      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        categories={categories}
      />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <BrandProductCard
                key={product.id}
                image={
                  product.imageUrls?.[0] || "https://via.placeholder.com/400"
                }
                title={product.title}
                price={product.basePrice}
                productId={product.id}
                hasCOD={product.hasCOD}
                hasExchange={product.hasExchange}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProduct;
