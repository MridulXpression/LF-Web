"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axiosHttp from "@/utils/axioshttp";
import { addSearch } from "@/redux/slices/searchSlice";

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

  const trendingSearches = [
    "Poplin Shirts",
    "Sweater Vests",
    "Tank Tops",
    "Muscle Tanks",
    "Thermal Shirts",
  ];

  // Fetch suggestions on search query change
  useEffect(() => {
    if (!searchQuery.trim()) return setSuggestions([]);

    const timer = setTimeout(async () => {
      setIsLoadingSuggestions(true);
      try {
        const res = await axiosHttp.post(
          `product-suggestion?key=${searchQuery}`
        );
        setSuggestions(res.data.data || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
      setIsLoadingSuggestions(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
      dispatch(addSearch(searchQuery.trim()));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const trimmedSuggestion = suggestion.trim();
    router.push(`/products?search=${encodeURIComponent(trimmedSuggestion)}`);
    setIsOpen(false);
    dispatch(addSearch(trimmedSuggestion));
  };

  if (!isOpen) return null;

  return (
    <div className="w-full max-h-screen bg-white z-[1000] fixed top-15 left-0">
      {/* Search Input Area */}
      <div className="w-full h-24 px-16 py-7 bg-white inline-flex justify-between items-center">
        <div className="flex-1 flex justify-start items-center gap-32">
          <div className="flex justify-start items-center gap-14">
            <div className="w-20 h-8 relative">
              <Image
                src="/images/Lafetch Logo.svg"
                alt="Logo"
                width={100}
                height={40}
              />
            </div>
          </div>
          <div className="flex-1 py-0.5 border-b border-stone-950 flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className="flex justify-start items-center gap-5">
                <div className="flex justify-start items-center gap-4">
                  <div className="w-9 h-9 relative rounded">
                    <Search className="w-6 h-6 absolute left-[6px] top-[5.51px] text-stone-950" />
                  </div>
                </div>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Searh To Explore More"
                className="text-center justify-start text-stone-950 text-sm font-medium uppercase leading-4 border-none outline-none bg-transparent flex-1"
                autoFocus
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-center justify-start text-stone-950 text-sm font-semibold uppercase leading-4 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Area */}
      <div
        ref={searchDropdownRef}
        className="w-full px-44 pt-7 pb-14 bg-stone-50 inline-flex justify-center items-start gap-10"
      >
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-start">
            {/* Recent Searches */}
            <div className="inline-flex flex-col justify-start items-start gap-3.5">
              <div className="justify-start text-neutral-700 text-sm font-normal">
                {suggestions.length > 0 ? "Suggestions" : "Recent Searches"}
              </div>
              <div className="max-w-[500px] inline-flex justify-start items-start gap-3.5 flex-wrap content-start">
                {isLoadingSuggestions ? (
                  <div className="justify-start text-neutral-700 text-sm font-normal">
                    Loading...
                  </div>
                ) : suggestions.length > 0 ? (
                  suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="h-7 px-2.5 py-1.5 bg-zinc-100 rounded flex justify-center items-center gap-1 cursor-pointer hover:bg-zinc-200 transition-colors"
                    >
                      <div className="flex justify-center items-start gap-2.5">
                        <div className="justify-start text-neutral-700 text-sm font-normal">
                          {suggestion}
                        </div>
                      </div>
                    </button>
                  ))
                ) : recentSearches.length > 0 ? (
                  recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="h-7 px-2.5 py-1.5 bg-zinc-100 rounded flex justify-center items-center gap-1 cursor-pointer hover:bg-zinc-200 transition-colors"
                    >
                      <div className="flex justify-center items-start gap-2.5">
                        <div className="justify-start text-neutral-700 text-sm font-normal">
                          {search}
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="justify-start text-neutral-700 text-sm font-normal">
                    No recent searches
                  </div>
                )}
              </div>
            </div>

            {/* Trending Searches */}
            <div className="pl-7 border-l-[0.50px] border-stone-950 inline-flex flex-col justify-start items-start gap-3.5">
              <div className="justify-start text-neutral-700 text-sm font-normal">
                Trending Searches
              </div>
              <div className="inline-flex justify-start items-start gap-1">
                <div className="w-56 self-stretch px-4 py-3.5 bg-zinc-100 flex justify-start items-start gap-2.5">
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-3.5">
                    <div className="flex flex-col justify-start items-start gap-1.5">
                      {trendingSearches.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(item)}
                          className="inline-flex justify-center items-center gap-2.5 cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          <div className="justify-start text-neutral-700 text-sm font-normal">
                            {item}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
