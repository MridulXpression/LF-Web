"use client";
import React from "react";
import BrandDirectory from "@/components/BrandDirectory";
import usegetBrands from "@/hooks/useGetBrands";

const AllBrands = () => {
  const { brands, loading } = usegetBrands();

  // Transform API data to match BrandDirectory props
  const formattedBrands =
    brands?.map((brand) => ({
      id: brand?.id || "",
      name: brand?.name || "",
      logo: brand?.logo || null,
    })) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <BrandDirectory brands={formattedBrands} />
    </div>
  );
};

export default AllBrands;
