// SearchFilterBar.jsx
import React from "react";
import { Search, SlidersHorizontal, Grid, ChevronDown } from "lucide-react";

const SearchFilterBar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  categories,
}) => {
  return (
    <div className="bg-white pt-[100px] ">
      <div className="max-w-7xl mx-auto px-4 mb-6 ">
        <div className="flex flex-wrap gap-4 items-center justify-between  p-4 rounded-lg ">
          <div className="flex-1 min-w-[150px] max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search For Product "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-b  border-black  focus:outline-none focus:border-gray-400 placeholder-gray-600 text-black"
              />
            </div>
          </div>

          {/* <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border-r border-black hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4 text-black" />
              <span className="text-black">Filters</span>
            </button>

            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none text-black px-4 py-2 pr-8 border-r border-black  hover:bg-gray-50 focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <Grid className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none text-black" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none text-black px-4 py-2 pr-8 rounded-lg hover:bg-gray-50 focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort By</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
