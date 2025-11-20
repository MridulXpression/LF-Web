"use client";
import React from "react";
import BrandDirectory from "@/components/BrandDirectory";
import usegetBrands from "@/hooks/useGetBrands";

const AllBrands = () => {
  const { brands, loading } = usegetBrands();

  if (loading) {
    return (
      <div className="flex justify-center bg-white items-center min-h-[100vh]">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

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
