"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axiosHttp from "@/utils/axioshttp";

import ListingCard from "@/components/ListingCard";
import useProducts from "@/hooks/useProducts";
import useSortedProducts from "@/hooks/useProductSort";
import usegetBrands from "@/hooks/useGetBrands";
import useFilterProducts from "@/hooks/useFilters"; // ✅ using your hook

const ShopByCategoriesPage = () => {
  const searchParams = useSearchParams();
  const genderValue = searchParams.get("gender");
  const query = genderValue ? `gender=${genderValue}` : "";

  const allProducts = useProducts(query);
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [sortQuery, setSortQuery] = useState("");

  const sortedProducts = useSortedProducts(sortQuery);

  // 🔹 Fetch brand list
  const getbrands = usegetBrands();
  const brands =
    getbrands?.map((brand) => ({
      id: brand?.id || "",
      name: brand?.name || "",
    })) || [];

  // 🔹 Filter states
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "0", max: "10000" });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false); // ✅ track if filters applied

  // ✅ Hook instance
  const filterProducts = useFilterProducts();

  // Handle brand selection
  const toggleBrandSelection = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  // 🔹 Fetch search results if query exists
  const searchQuery = searchParams.get("search");
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
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // ✅ Apply Filter button handler
  const handleApplyFilters = async () => {
    const payload = {
      brandIds: selectedBrands,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    };

    try {
      const result = await filterProducts(payload);
      setIsFilterApplied(true); // ✅ mark filter applied
      setFilteredProducts(result || []); // safely handle empty
    } catch (err) {
      console.error("Error applying filters:", err);
      setFilteredProducts([]);
    }
  };

  // ✅ Clear filters handler
  const handleClearFilters = () => {
    setSelectedBrands([]);
    setPriceRange({ min: "0", max: "10000" });
    setFilteredProducts([]);
    setIsFilterApplied(false);
  };

  // 🔹 Determine which products to show
  let products = [];
  if (isFilterApplied) {
    products = filteredProducts;
  } else if (searchResults !== null) {
    products = searchResults;
  } else if (sortQuery) {
    products = sortedProducts;
  } else {
    products = allProducts;
  }

  // 🔹 Sorting handler
  const handleSortChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "Price: Low to High":
        setSortQuery("price_asc");
        break;
      case "Price: High to Low":
        setSortQuery("price_desc");
        break;
      case "Customer Rating":
        setSortQuery("rating");
        break;
      case "Discount":
        setSortQuery("discount");
        break;
      case "Newest First":
        setSortQuery("whats_new");
        break;
      default:
        setSortQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar Filters */}
        <div className="w-64 bg-white p-6 border-r border-gray-200 h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-wide text-black">
            Filters
          </h2>

          {/* 🔹 Brand Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label
                  key={brand.id}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.id)}
                    onChange={() => toggleBrandSelection(brand.id)}
                    className="w-4 h-4 accent-black"
                  />
                  <span>{brand.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 🔹 Price Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Price Range
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm text-black"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm text-black"
              />
            </div>
          </div>

          {/* 🔹 Buttons */}
          <button
            onClick={handleApplyFilters}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Apply Filters
          </button>

          <button
            onClick={handleClearFilters}
            className="w-full mt-3 border border-gray-300 py-2 rounded hover:bg-gray-100 transition text-black"
          >
            Clear Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {!searchQuery && (
                <>
                  <span className="text-sm text-black">Sort by:</span>
                  <select
                    onChange={handleSortChange}
                    className="text-sm text-black border border-gray-300 rounded px-3 py-1"
                  >
                    <option>All Products</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Customer Rating</option>
                    <option>Discount</option>
                    <option>Newest First</option>
                  </select>
                </>
              )}
            </div>

            {searchQuery && (
              <Link
                href="/products"
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Clear search
              </Link>
            )}
          </div>

          {/* Loading / No Results / Product Grid */}
          {isSearching && (
            <div className="flex justify-center items-center h-64 text-gray-600">
              Searching products...
            </div>
          )}

          {!isSearching && products?.length === 0 && (
            <div className="flex flex-col justify-center items-center h-64 text-center">
              <div className="text-gray-900 text-xl font-semibold mb-2">
                {isFilterApplied
                  ? "No products available according to the selected filters."
                  : "No products found"}
              </div>
              <a
                href="/products"
                className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
              >
                Browse All Products
              </a>
            </div>
          )}

          {!isSearching && products?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {products.map((product) => {
                const mrp = Number(product.mrp);
                const basePrice = Number(product.basePrice);
                const discountPercentage =
                  !isNaN(mrp) && !isNaN(basePrice) && mrp > 0
                    ? Math.round(((mrp - basePrice) / mrp) * 100)
                    : 0;

                return (
                  <ListingCard
                    key={product.id}
                    imageUrls={product.imageUrls || []}
                    title={product.title}
                    brand={product.brandId || "Brand"}
                    rating={product.rating || 0}
                    reviewCount={product.numReviews?.toString() || "0"}
                    basePrice={basePrice}
                    mrp={mrp}
                    discountPercentage={`${discountPercentage}`}
                    id={product.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoriesPage;
