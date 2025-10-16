"use client";
import React from "react";
import BrandDirectory from "@/components/BrandDirectory";
import usegetBrands from "@/hooks/useGetBrands";

const AllBrands = () => {
  const getbrands = usegetBrands();

  // Transform API data to match BrandDirectory props
  const brands =
    getbrands?.map((brand) => ({
      id: brand?.id || "",
      name: brand?.name || "",
      logo: brand?.logo || null,
    })) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <BrandDirectory brands={brands} />
    </div>
  );
};

export default AllBrands;
