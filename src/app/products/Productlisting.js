"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import FilterSidebar from "@/components/FilterSidebar";
import SortSelector from "@/components/SortSelector";
import ProductGrid from "@/components/ProductGrid";
import usegetBrands from "@/hooks/useGetBrands";
import useUnifiedFilter from "@/hooks/useUnifiedFilter";
import useProducts from "@/hooks/useProducts";
import { Filter } from "lucide-react";

const ShopByCategoriesPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ===== URL PARAMETERS =====
  const subCategoryId = searchParams.get("subCatId");
  const superCatId = searchParams.get("superCatId");
  const catId = searchParams.get("catId");
  const searchQuery = searchParams.get("key")
    ? decodeURIComponent(searchParams.get("key"))
    : null;
  const collectionId = searchParams.get("collectionID");

  // ===== BRANDS =====
  const { brands: rawBrands } = usegetBrands();
  const brands =
    rawBrands?.map((brand) => ({
      id: brand?.id || "",
      name: brand?.name || "",
    })) || [];

  // ===== SUPER CATEGORIES (Men, Women, Accessories) =====
  const superCategories = [
    { id: 1, name: "Men" },
    { id: 2, name: "Women" },
    { id: 3, name: "Accessories" },
  ];

  // ===== FILTER STATE =====
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSuperCategory, setSelectedSuperCategory] = useState(
    superCatId ? Number(superCatId) : null
  );
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("minPrice") || "0",
    max: searchParams.get("maxPrice") || "10000",
  });
  const [expandedBrands, setExpandedBrands] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [expandedSizes, setExpandedSizes] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [expandedColors, setExpandedColors] = useState(false);

  // ===== SORT STATE =====
  const [selectedSort, setSelectedSort] = useState("");

  // ===== FILTER PANEL STATE =====
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // ===== CHECK IF ANY FILTERS ARE APPLIED =====
  const hasFiltersApplied = () => {
    return (
      selectedBrands.length > 0 ||
      selectedSuperCategory ||
      priceRange.min !== "0" ||
      priceRange.max !== "10000" ||
      selectedSizes.length > 0 ||
      selectedColors.length > 0 ||
      selectedSort ||
      subCategoryId ||
      catId ||
      collectionId ||
      searchQuery
    );
  };

  // ===== HOOKS =====
  // Use filter API when filters are applied
  const {
    products: filteredProducts,
    isLoading: isFilterLoading,
    applyFilters,
  } = useUnifiedFilter();

  // Use pagination when no filters applied
  const {
    products: paginatedProducts,
    loading: isPageLoading,
    hasMore,
    loadMore,
  } = useProducts(hasFiltersApplied() ? null : "");

  // Determine which products to display
  const products = hasFiltersApplied() ? filteredProducts : paginatedProducts;
  const isLoading = hasFiltersApplied() ? isFilterLoading : isPageLoading;

  // ===== AVAILABLE SIZES & COLORS (Mock - replace with API if needed) =====
  const [availableSizes, setAvailableSizes] = useState([
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
    { id: 5, name: "XL" },
    { id: 6, name: "XXL" },
  ]);

  const [availableColors, setAvailableColors] = useState([
    { id: 1, name: "Black" },
    { id: 2, name: "White" },
    { id: 3, name: "Red" },
    { id: 4, name: "Blue" },
    { id: 5, name: "Green" },
    { id: 6, name: "Yellow" },
  ]);

  // ===== APPLY FILTERS ON URL CHANGE =====
  useEffect(() => {
    // Only apply filters if filters are actually applied
    if (hasFiltersApplied()) {
      applyFilters({
        brandIds: selectedBrands,
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
        sort: selectedSort,
        superCatId: selectedSuperCategory,
        subCatId: subCategoryId ? Number(subCategoryId) : null,
        catId: catId ? Number(catId) : null,
        sizeIds: selectedSizes,
        colorIds: selectedColors,
        collectionId: collectionId ? Number(collectionId) : null,
        key: searchQuery,
      });
    }
  }, [
    selectedBrands,
    priceRange,
    selectedSort,
    selectedSuperCategory,
    subCategoryId,
    catId,
    selectedSizes,
    selectedColors,
    collectionId,
    searchQuery,
    applyFilters,
  ]);

  // ===== HANDLERS =====
  const toggleBrandSelection = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleSizeSelection = (sizeId) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeId)
        ? prev.filter((id) => id !== sizeId)
        : [...prev, sizeId]
    );
  };

  const toggleColorSelection = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedBrands.length > 0) {
      params.set("brandIds", selectedBrands.join(","));
    }
    if (priceRange.min !== "0") {
      params.set("minPrice", priceRange.min);
    }
    if (priceRange.max !== "10000") {
      params.set("maxPrice", priceRange.max);
    }
    if (selectedSuperCategory) {
      params.set("superCatId", selectedSuperCategory);
    }
    if (selectedSizes.length > 0) {
      params.set("sizeIds", selectedSizes.join(","));
    }
    if (selectedColors.length > 0) {
      params.set("colorIds", selectedColors.join(","));
    }
    if (selectedSort) {
      params.set("sort", selectedSort);
    }
    if (subCategoryId) {
      params.set("subCatId", subCategoryId);
    }
    if (catId) {
      params.set("catId", catId);
    }
    if (collectionId) {
      params.set("collectionID", collectionId);
    }
    if (searchQuery) {
      params.set("key", encodeURIComponent(searchQuery));
    }

    router.push(`/products?${params.toString()}`);
    setIsFilterOpen(false);
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedSuperCategory(null);
    setPriceRange({ min: "0", max: "10000" });
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedSort("");
    router.push("/products");
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSelectedSort(sortValue);
  };

  const handleBrowseAll = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-white relative mt-[150px]">
      {/* MOBILE FILTER BUTTON */}
      <button
        className="lg:hidden fixed bottom-4 left-4 z-10 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
        onClick={() => setIsFilterOpen(true)}
      >
        <Filter size={18} /> Filters
      </button>

      <div className="max-w-[1400px] mx-auto flex">
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
          superCategories={superCategories}
          selectedSuperCategory={selectedSuperCategory}
          onSuperCategoryChange={setSelectedSuperCategory}
          sizes={availableSizes}
          selectedSizes={selectedSizes}
          toggleSizeSelection={toggleSizeSelection}
          expandedSizes={expandedSizes}
          setExpandedSizes={setExpandedSizes}
          colors={availableColors}
          selectedColors={selectedColors}
          toggleColorSelection={toggleColorSelection}
          expandedColors={expandedColors}
          setExpandedColors={setExpandedColors}
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
          isLoading={isLoading}
        />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6">
          {/* SORT SELECTOR */}
          <SortSelector
            searchQuery={searchQuery}
            onSortChange={handleSortChange}
            isSortLoading={isLoading}
            selectedSort={selectedSort}
          />

          {/* PRODUCT GRID */}
          <ProductGrid
            products={products}
            isLoading={isLoading}
            isSearching={false}
            isFilterLoading={isLoading}
            isSortLoading={false}
            isFilterApplied={hasFiltersApplied()}
            hasMore={hasFiltersApplied() ? false : hasMore}
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
