"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Search, ArrowUpRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { addSearch } from "@/redux/slices/searchSlice";
import axios from "axios";

export default function NavbarSearchComponent({
  searchQuery,
  setSearchQuery,
  isOpen,
  setIsOpen,
}) {
  const searchDropdownRef = useRef(null);
  const recentSearches = useSelector((state) => state.search.recentSearches);
  const dispatch = useDispatch();
  const router = useRouter();

  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  const trendingSearches = ["Valentines fits", "For Office", "Vacation Wear"];

  // Fetch suggestions on search query change
  useEffect(() => {
    if (!searchQuery.trim()) return setSuggestions([]);

    const timer = setTimeout(async () => {
      setIsLoadingSuggestions(true);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/product-suggestion?key=${searchQuery}`,
        );
        setSuggestions(res.data.data || []);
      } catch (error) {
        setSuggestions([]);
      }
      setIsLoadingSuggestions(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const anchorRef = useRef(null);
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setIsOpen(false);
      dispatch(addSearch(searchQuery.trim()));
      // Programmatically click the anchor to navigate
      if (anchorRef.current) {
        anchorRef.current.click();
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const trimmedSuggestion = suggestion.trim();
    setIsOpen(false);
    dispatch(addSearch(trimmedSuggestion));
    // Navigation is now handled by anchor tag, so no router.push
  };

  if (!isOpen) return null;

  return (
    <div className="w-full max-h-screen bg-transparent z-[1000] fixed top-12 left-0">
      {/* Search Input Area */}
      <div className="w-full h-auto min-h-20 md:h-24 px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-7 bg-white inline-flex justify-between items-center">
        <div className="flex-1 flex justify-start items-center gap-4 md:gap-8 lg:gap-32">
          <div className="hidden sm:flex justify-start items-center gap-4 md:gap-14">
            <div className="w-16 sm:w-20 h-6 sm:h-8 relative">
              <Image
                src="/images/Lafetch Logo.svg"
                alt="Logo"
                width={100}
                height={40}
              />
            </div>
          </div>
          <div className="flex-1 py-0.5 border-b border-stone-950 flex justify-between items-center gap-2">
            <div className="flex-1 flex justify-start items-center gap-1 sm:gap-2">
              <div className="flex justify-start items-center gap-2 sm:gap-5">
                <div className="flex justify-start items-center gap-2 sm:gap-4">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 relative rounded">
                    <Search className="w-4 h-4 sm:w-6 sm:h-6 text-stone-950" />
                  </div>
                </div>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search To Explore More"
                className="text-left justify-start text-stone-950 text-xs sm:text-sm font-medium leading-4 border-none outline-none bg-transparent flex-1 min-w-0"
                autoFocus
              />
              {/* Hidden anchor for Enter key navigation */}
              <a
                href={
                  searchQuery.trim()
                    ? `/products?key=${searchQuery.trim()}`
                    : "#"
                }
                ref={anchorRef}
                style={{ display: "none" }}
                tabIndex={-1}
                aria-hidden="true"
              >
                Go
              </a>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-center justify-start text-stone-950 text-xs sm:text-sm font-semibold uppercase leading-4 cursor-pointer whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Area */}
      <div
        ref={searchDropdownRef}
        className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 pt-4 sm:pt-7 pb-8 sm:pb-14 bg-white inline-flex justify-between items-start gap-6 md:gap-10"
      >
        {/* Left Side - Suggestions */}
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 max-w-4xl">
          {searchQuery.trim() &&
          (suggestions.length > 0 || isLoadingSuggestions) ? (
            // Show only suggestions when typing
            <div className="w-full inline-flex flex-col justify-start items-start gap-0.3">
              {isLoadingSuggestions ? (
                <div className="w-full flex items-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                  <span className="ml-3 text-neutral-500 text-sm font-normal">
                    Searching...
                  </span>
                </div>
              ) : (
                suggestions.map((suggestion, index) => (
                  <a
                    key={index}
                    href={`/products?key=${suggestion.keyword.trim()}`}
                    onClick={() => handleSuggestionClick(suggestion.keyword)}
                    className="w-full flex justify-between items-center py-2 cursor-pointer hover:bg-gray-50 transition-colors group border-b border-gray-200"
                  >
                    <div className="text-neutral-500 text-sm font-normal group-hover:text-neutral-700">
                      {suggestion.keyword}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-400 text-sm font-normal">
                        {suggestion.count} results
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </a>
                ))
              )}
            </div>
          ) : (
            // Show Recent and Trending when not typing
            <div className="self-stretch flex flex-col md:inline-flex md:flex-row justify-start items-start gap-6 md:gap-0">
              {/* Recent Searches */}
              <div className="w-full md:w-auto md:pr-8 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="justify-start text-neutral-600 text-md font-normal">
                  Recent Searches
                </div>
                <div className="w-full md:max-w-[500px] inline-flex justify-start items-start gap-2 sm:gap-3.5 flex-wrap content-start">
                  {recentSearches.length > 0 ? (
                    recentSearches.map((search, index) => (
                      <a
                        key={index}
                        href={`/products?key=${search.trim()}`}
                        onClick={() => handleSuggestionClick(search)}
                        className="h-auto sm:h-7 px-2 sm:px-2.5 py-1 sm:px-2.5 bg-gray-200 rounded-lg flex justify-center items-center gap-1 cursor-pointer hover:bg-zinc-200 transition-colors"
                      >
                        <div className="flex justify-center items-start gap-2.5">
                          <div className="justify-start text-neutral-700 text-xs sm:text-sm font-normal">
                            {search}
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="justify-start text-neutral-700 text-xs sm:text-sm font-normal">
                      No recent searches
                    </div>
                  )}
                </div>
              </div>

              {/* Trending Searches */}
              <div className="w-full md:w-auto md:pl-8 md:border-l-[0.50px] border-stone-950 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="justify-start text-neutral-600 text-md font-normal">
                  Trending searches
                </div>
                <div className="w-full md:max-w-[500px] inline-flex justify-start items-start gap-2 sm:gap-3.5 flex-wrap content-start">
                  {trendingSearches.map((item, index) => (
                    <a
                      key={index}
                      href={`/products?key=${item.trim()}`}
                      onClick={() => handleSuggestionClick(item)}
                      className="h-auto sm:h-7 px-2 sm:px-2.5 py-1 sm:px-2.5 bg-gray-200 rounded-lg flex justify-center items-center gap-1 cursor-pointer hover:bg-zinc-200 transition-colors"
                    >
                      <div className="flex justify-center items-start gap-2.5">
                        <div className="justify-start text-neutral-700 text-xs sm:text-sm font-normal">
                          {item}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Images - Always visible */}
        <div className="hidden lg:flex justify-start items-center gap-2">
          <div className="w-[110px] h-[130px] relative rounded-xl overflow-hidden">
            <Image
              src="/images/search1.png"
              alt="Product 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[110px] h-[130px] relative rounded-xl overflow-hidden">
            <Image
              src="/images/search2.png"
              alt="Product 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[110px] h-[130px] relative rounded-xl overflow-hidden">
            <Image
              src="/images/search3.png"
              alt="Product 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[110px] h-[130px] relative rounded-xl overflow-hidden">
            <Image
              src="/images/search4.png"
              alt="Product 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
