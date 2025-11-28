"use client";
import React, { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BrandDirectory = ({ brands }) => {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedLetters, setExpandedLetters] = useState({});

  const alphabets = useMemo(() => {
    const letters = new Set(brands.map((b) => b.name[0].toUpperCase()));
    return Array.from(letters).sort();
  }, [brands]);

  const filteredBrands = useMemo(() => {
    let filtered = brands;

    if (searchQuery) {
      filtered = filtered.filter((brand) =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const grouped = {};
    filtered.forEach((brand) => {
      const letter = brand.name[0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(brand);
    });

    return grouped;
  }, [brands, searchQuery]);

  const toggleExpand = (letter) => {
    setExpandedLetters((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  const scrollToLetter = (letter) => {
    setSelectedLetter(letter);
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const lettersToRender = useMemo(() => {
    return Object.keys(filteredBrands).sort();
  }, [filteredBrands]);

  const renderBrands = (letter) => {
    const brandsForLetter = filteredBrands[letter] || [];
    const isExpanded = expandedLetters[letter];
    const displayBrands = isExpanded
      ? brandsForLetter
      : brandsForLetter.slice(0, 13);
    const hasMore = brandsForLetter.length > 13;

    return (
      <div key={letter} id={`letter-${letter}`} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Left side - Letter */}
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#988BFF] flex items-center justify-center bg-white">
              <span className="text-xl sm:text-2xl font-semibold text-gray-700 ">
                {letter}
              </span>
            </div>
          </div>

          {/* Right side - Brands Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
              {displayBrands.map((brand, idx) => (
                <Link
                  key={idx}
                  href={`/brands/${brand.id}`}
                  onClick={() => {
                    if (brand?.id) {
                      localStorage.setItem("brandId", brand.id);
                    }
                  }}
                  className="relative bg-[#ECECF0] flex flex-col items-center cursor-pointer overflow-hidden group h-full"
                >
                  {/* Image */}
                  <div className="w-full p-6 flex items-center justify-center">
                    <div className="aspect-square w-32 bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={150}
                          height={150}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400 text-sm font-semibold">
                            {brand.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer pushes name to bottom */}
                  <div className="flex-grow" />

                  {/* Brand Name - always at bottom */}
                  <p className="text-sm text-center text-gray-900 font-normal w-full px-4 py-2 min-h-[40px] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#E0E0E3]">
                    {brand.name}
                  </p>
                </Link>
              ))}

              {/* View More / View Less Button */}
              {hasMore && (
                <div
                  onClick={() => toggleExpand(letter)}
                  className="flex flex-col items-center justify-center cursor-pointer aspect-square text-gray-600 hover:text-gray-800 transition-all"
                >
                  <p className="text-xs sm:text-sm font-medium flex items-center gap-1 underline">
                    {isExpanded ? "View Less" : "View More"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 inline-block" />
                    ) : (
                      <ChevronDown className="w-4 h-4 inline-block" />
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Top Section - Alphabet Navigation and Search */}
      <div className="mb-8">
        {/* Alphabet Navigation */}
        <div className="flex items-center md:gap-4 gap-3 flex-wrap mb-4">
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className="text-black hover:text-gray-900  md:text-[15px] sm:text-sm transition-colors cursor-pointer"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search For Brands"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border-0 border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 placeholder-gray-400 text-black"
          />
        </div>
      </div>

      {/* Brand Grid by Alphabet */}
      <div>{lettersToRender.map((letter) => renderBrands(letter))}</div>
    </div>
  );
};

export default BrandDirectory;
