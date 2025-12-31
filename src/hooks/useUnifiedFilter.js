import { useState, useCallback } from "react";
import axiosHttp from "@/utils/axioshttp";

const useUnifiedFilter = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const applyFilters = useCallback(
    async ({
      brandIds = [],
      minPrice = 0,
      maxPrice = 10000,
      sort = "",
      superCatId = null,
      subCatId = null,
      catId = null,
      sizes = [],
      colors = [],
      collectionId = null,
      key = null,
    }) => {
      setIsLoading(true);
      try {
        // Build query parameters
        const params = new URLSearchParams();

        if (brandIds && brandIds.length > 0) {
          params.append("brandIds", brandIds.join(","));
        }
        if (minPrice && minPrice !== 0 && minPrice !== "0")
          params.append("minPrice", minPrice);
        if (maxPrice && maxPrice !== 10000 && maxPrice !== "10000")
          params.append("maxPrice", maxPrice);
        if (sort) params.append("sort", sort);
        if (superCatId) params.append("superCatId", superCatId);
        if (subCatId) params.append("subCatId", subCatId);
        if (catId) params.append("catId", catId);
        if (sizes && sizes.length > 0) {
          params.append("size", sizes.join(","));
        }
        if (colors && colors.length > 0) {
          params.append("color", colors.join(","));
        }
        if (collectionId) params.append("collectionId", collectionId);
        if (key) params.append("key", encodeURIComponent(key));

        const response = await axiosHttp.post(
          `/filter-products?${params.toString()}`
        );

        if (response?.status === 200) {
          setProducts(response?.data?.data || []);
          return response?.data?.data || [];
        } else {
          setProducts([]);
          return [];
        }
      } catch (error) {
        console.error("Filter error:", error);
        setProducts([]);
        return [];
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    products,
    isLoading,
    applyFilters,
  };
};

export default useUnifiedFilter;
