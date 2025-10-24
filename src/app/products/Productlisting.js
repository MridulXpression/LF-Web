"use client";
import FilterDropdown from "@/components/Filter";
import ListingCard from "@/components/ListingCard";
import { useState, useEffect } from "react";
import useProducts from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import Link from "next/link";
import useSortedProducts from "@/hooks/useProductSort";

const ShopByCategoriesPage = () => {
  const searchParams = useSearchParams();
  const [openFilters, setOpenFilters] = useState({});
  const genderValue = searchParams.get("gender");
  const query = genderValue ? `gender=${genderValue}` : "";

  const allProducts = useProducts(query);
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const searchQuery = searchParams.get("search");

  // 👇 maintain selected sort filter
  const [sortQuery, setSortQuery] = useState(""); // default no sort
  const sortedProducts = useSortedProducts(sortQuery);

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

  // 👇 choose products source (sorted or normal or search)
  let products = [];
  if (searchResults !== null) {
    products = searchResults;
  } else if (sortQuery) {
    products = sortedProducts;
  } else {
    products = allProducts;
  }

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const filterCategories = [
    { name: "Filters", options: [] },
    {
      name: "Category",
      options: ["Tops", "Dresses", "Bottoms", "Accessories"],
    },
    { name: "Size", options: ["XS", "S", "M", "L", "XL", "XXL"] },
    { name: "Brand", options: ["Valkyrie", "Nike", "Adidas", "Puma"] },
    {
      name: "Price",
      options: ["Under ₹500", "₹500-₹1000", "₹1000-₹2000", "Above ₹2000"],
    },
  ];

  // 👇 handle sort change
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
        setSortQuery(""); // reset to default (unsorted)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar Filters */}
        <div className="w-64 bg-white p-6 border-r border-gray-200 h-screen overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              {searchQuery ? "SEARCH RESULTS" : "SHOP BY CATEGORIES"}
            </h2>
          </div>
          <div className="space-y-0">
            {filterCategories.map((category) => (
              <FilterDropdown
                key={category.name}
                title={category.name}
                options={category.options}
                isOpen={openFilters[category.name]}
                onToggle={() => toggleFilter(category.name)}
              />
            ))}
          </div>
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

          {/* Loading State */}
          {isSearching && (
            <div className="flex justify-center items-center h-64">
              <div className="text-gray-600">Searching products...</div>
            </div>
          )}

          {/* No Results */}
          {!isSearching && products?.length === 0 && (
            <div className="flex flex-col justify-center items-center h-64 text-center">
              <div className="text-gray-900 text-xl font-semibold mb-2">
                No products found
              </div>
              <div className="text-gray-600 mb-4">
                Try different keywords or browse all products
              </div>
              <a
                href="/products"
                className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
              >
                Browse All Products
              </a>
            </div>
          )}

          {/* Products Grid */}
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
