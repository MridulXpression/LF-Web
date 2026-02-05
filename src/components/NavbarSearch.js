"use client";

import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";

const NavbarSearch = ({
  searchQuery,
  setSearchQuery,
  suggestions,
  isLoadingSuggestions,
  handleSearch,
  handleSuggestionClick,
  setShowSearchDropdown,
}) => {
  const searchDropdownRef = useRef(null);
  const recentSearches = useSelector((state) => state.search.recentSearches);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowSearchDropdown]);

  return (
    <div
      ref={searchDropdownRef}
      className="absolute left-0 md:top-26 w-screen max-w-full bg-white border border-gray-200 shadow-lg z-40"
    >
      <div className="px-4 sm:px-6 lg:px-12 py-6">
        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search products... (Press Enter to search)"
            className="w-full pl-10 pr-4 py-3 border-b text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            autoFocus
          />
        </div>

        <div className="flex items-start max-w-[600px]">
          {/* Suggestions */}
          <div className="flex-1 pr-8">
            <h3 className="font-semibold text-gray-900 mb-4">
              {isLoadingSuggestions
                ? "Loading..."
                : suggestions.length > 0
                  ? "Suggestions"
                  : recentSearches.length > 0
                    ? "Recent Searches"
                    : "Searches"}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-gray-600 hover:text-gray-900 text-left hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                  >
                    {suggestion}
                  </button>
                ))
              ) : !isLoadingSuggestions && recentSearches.length > 0 ? (
                recentSearches.map((search, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(search)}
                    className="text-gray-600 hover:text-gray-900 text-left hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                  >
                    {search}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No suggestions found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
