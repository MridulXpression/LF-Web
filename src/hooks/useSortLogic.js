import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useSortedProducts from "@/hooks/useProductSort";

const useSortLogic = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortQuery = searchParams.get("sort") || "";
  const [isSortLoading, setIsSortLoading] = useState(false);

  const sortedProducts = useSortedProducts(sortQuery);

  // Stop loading when sorted products update
  useEffect(() => {
    if (sortQuery) {
      setIsSortLoading(false);
    }
  }, [sortedProducts, sortQuery]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(window.location.search);

    setIsSortLoading(true);

    // Remove subcategory but keep brands, minPrice, maxPrice params
    params.delete("subCategoryId");

    switch (value) {
      case "Price: Low to High":
        params.set("sort", "price_asc");
        break;
      case "Price: High to Low":
        params.set("sort", "price_desc");
        break;
      case "Customer Rating":
        params.set("sort", "rating");
        break;
      case "Discount":
        params.set("sort", "discount");
        break;
      case "Newest First":
        params.set("sort", "whats_new");
        break;
      default:
        params.delete("sort");
    }

    router.push(`/products?${params.toString()}`);
  };

  return {
    sortQuery,
    isSortLoading,
    sortedProducts,
    handleSortChange,
  };
};

export default useSortLogic;
