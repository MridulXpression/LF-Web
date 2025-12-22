"use client";
import { useRef, useEffect } from "react";

const FilterSidebar = ({
  isFilterOpen,
  setIsFilterOpen,
  brands,
  selectedBrands,
  toggleBrandSelection,
  expandedBrands,
  setExpandedBrands,
  priceRange,
  setPriceRange,
  superCategories,
  selectedSuperCategory,
  onSuperCategoryChange,
  sizes,
  selectedSizes,
  toggleSizeSelection,
  expandedSizes,
  setExpandedSizes,
  colors,
  selectedColors,
  toggleColorSelection,
  expandedColors,
  setExpandedColors,
  onApplyFilters,
  onClearFilters,
  isLoading,
}) => {
  const filterRef = useRef(null);

  // CLOSE FILTER PANEL ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isFilterOpen &&
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen, setIsFilterOpen]);

  return (
    <>
      {/* BACKDROP BLUR */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}

      {/* FILTER SIDEBAR */}
      <div
        ref={filterRef}
        className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto 
          w-72 bg-white p-6 border-r border-gray-400 overflow-y-auto z-50 md:z-8  
          transform transition-transform duration-300
          ${
            isFilterOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <button
          className="lg:hidden mb-4 text-black font-bold text-lg"
          onClick={() => setIsFilterOpen(false)}
        >
          ✕ Close
        </button>

        <h2 className="text-xl font-bold mb-6 uppercase tracking-wide text-black">
          Filters
        </h2>

        {/* Super Category Filter */}
        {superCategories && superCategories.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Category
            </h3>
            <div className="space-y-2">
              {superCategories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="superCategory"
                    value={cat.id}
                    checked={selectedSuperCategory === cat.id}
                    onChange={() => onSuperCategoryChange(cat.id)}
                    className="w-4 h-4 accent-black"
                  />
                  <span>{cat.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Brand Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand</h3>
          <div className="space-y-2">
            {brands
              .slice(0, expandedBrands ? brands.length : 5)
              .map((brand) => (
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
          {brands.length > 5 && (
            <button
              onClick={() => setExpandedBrands(!expandedBrands)}
              className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
            >
              {expandedBrands ? "View Less" : "View More"}
            </button>
          )}
        </div>

        {/* Price Range */}
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

        {/* Size Filter */}
        {sizes && sizes.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Size</h3>
            <div className="space-y-2">
              {sizes.slice(0, expandedSizes ? sizes.length : 5).map((size) => (
                <label
                  key={size.id}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size.id)}
                    onChange={() => toggleSizeSelection(size.id)}
                    className="w-4 h-4 accent-black"
                  />
                  <span>{size.name}</span>
                </label>
              ))}
            </div>
            {sizes.length > 5 && (
              <button
                onClick={() => setExpandedSizes(!expandedSizes)}
                className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                {expandedSizes ? "View Less" : "View More"}
              </button>
            )}
          </div>
        )}

        {/* Color Filter */}
        {colors && colors.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Color</h3>
            <div className="space-y-2">
              {colors
                .slice(0, expandedColors ? colors.length : 5)
                .map((color) => (
                  <label
                    key={color.id}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color.id)}
                      onChange={() => toggleColorSelection(color.id)}
                      className="w-4 h-4 accent-black"
                    />
                    <span>{color.name}</span>
                  </label>
                ))}
            </div>
            {colors.length > 5 && (
              <button
                onClick={() => setExpandedColors(!expandedColors)}
                className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                {expandedColors ? "View Less" : "View More"}
              </button>
            )}
          </div>
        )}

        <button
          onClick={onApplyFilters}
          disabled={isLoading}
          className="w-full bg-black text-white py-2 rounded cursor-pointer disabled:opacity-50"
        >
          Apply Filters
        </button>

        <button
          onClick={onClearFilters}
          disabled={isLoading}
          className="w-full mt-3 border border-gray-300 py-2 rounded text-black cursor-pointer disabled:opacity-50"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default FilterSidebar;
