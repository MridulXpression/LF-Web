"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import FilterSidebar from "@/components/FilterSidebar";
import SortSelector from "@/components/SortSelector";
import ProductGrid from "@/components/ProductGrid";
import useProducts from "@/hooks/useProducts";
import usegetBrands from "@/hooks/useGetBrands";
import useGetProductBySubCategories from "@/hooks/useGetSubCategories";
import useFilterLogic from "@/hooks/useFilterLogic";
import useSortLogic from "@/hooks/useSortLogic";
import { Filter } from "lucide-react";

const ShopByCategoriesPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ===== SUBCATEGORY & GENDER =====
  const subCategoryId = searchParams.get("subCategoryId");
  const genderValue = searchParams.get("gender");
  const query = !subCategoryId && genderValue ? `gender=${genderValue}` : "";

  // ===== SEARCH =====
  const searchQuery = searchParams.get("search");

  // ===== PRODUCTS HOOK =====
  // Disable pagination products when search or subCategory is active
  const {
    products: allProducts,
    loading: isProductsLoading,
    hasMore,
    loadMore,
  } = useProducts(searchQuery || subCategoryId ? null : query);

  // ===== SUBCATEGORY PRODUCTS =====
  const subCategoryResponse = useGetProductBySubCategories(
    subCategoryId ? Number(subCategoryId) : null
  );
  const subCategoryProducts = subCategoryResponse?.data?.products || [];

  // ===== BRANDS =====
  const { brands: rawBrands } = usegetBrands();
  const brands =
    rawBrands?.map((brand) => ({
      id: brand?.id || "",
      name: brand?.name || "",
    })) || [];

  // ===== FILTER LOGIC =====
  const {
    selectedBrands,
    priceRange,
    setPriceRange,
    expandedBrands,
    setExpandedBrands,
    filteredProducts,
    isFilterApplied,
    isFilterLoading,
    toggleBrandSelection,
    handleApplyFilters,
    handleClearFilters,
  } = useFilterLogic();

  // ===== SORT LOGIC =====
  const { sortQuery, isSortLoading, sortedProducts, handleSortChange } =
    useSortLogic();

  // ===== STATE =====
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // ===== FILTER PANEL =====
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // ===== SEARCH EFFECT =====
  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      fetchSearchResults(searchQuery);
    } else {
      setSearchResults(null);
    }
  }, [searchQuery]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await axiosHttp.post(
        `product-search?key=${encodeURIComponent(query)}`
      );
      setSearchResults(response.data.data || []);
    } catch (error) {
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // ===== PRODUCT PRIORITY LOGIC =====
  let products = [];

  if (isFilterApplied) {
    products = filteredProducts;
  } else if (searchResults !== null) {
    products = searchResults;
  } else if (sortQuery) {
    products = sortedProducts;
  } else if (subCategoryId) {
    products = subCategoryProducts;
  } else {
    products = allProducts;
  }

  // ===== HANDLERS =====
  const handleBrowseAll = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* MOBILE FILTER BUTTON */}
      <button
        className="lg:hidden fixed bottom-4 left-4 z-10 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
        onClick={() => setIsFilterOpen(true)}
      >
        <Filter size={18} /> Filters
      </button>

      <div className="max-w-[1400px] mx-auto flex md:mt-[100px]">
        {/* FILTER SIDEBAR */}
        <FilterSidebar
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          brands={brands}
          selectedBrands={selectedBrands}
          toggleBrandSelection={toggleBrandSelection}
          expandedBrands={expandedBrands}
          setExpandedBrands={setExpandedBrands}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
          isLoading={isFilterLoading}
        />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6">
          {/* SORT SELECTOR */}
          <SortSelector
            searchQuery={searchQuery}
            onSortChange={handleSortChange}
            isSortLoading={isSortLoading}
          />

          {/* PRODUCT GRID */}
          <ProductGrid
            products={products}
            isLoading={isProductsLoading}
            isSearching={isSearching}
            isFilterLoading={isFilterLoading}
            isSortLoading={isSortLoading}
            isFilterApplied={isFilterApplied}
            hasMore={hasMore}
            subCategoryId={subCategoryId}
            onLoadMore={loadMore}
            onBrowseAll={handleBrowseAll}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoriesPage;
