"use client";
import React, { useState, useEffect } from "react";
import Banner from "./Banner";

const BannerGrid = ({ banners = [], bannerCount, displayFor = "homepage" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!banners.length) return null;

  // Filter banners based on displayFor
  const filteredBanners = banners.filter((banner) => {
    if (!banner.displayFor || !Array.isArray(banner.displayFor)) return true;
    return banner.displayFor.includes(displayFor);
  });

  if (!filteredBanners.length) return null;

  // Sort banners by position
  const sortedBanners = [...filteredBanners].sort(
    (a, b) => a.position - b.position,
  );

  // Get tile value from first banner (all banners in a collection have same tile)
  const tile = sortedBanners[0]?.tile || 1;
  const count = sortedBanners.length;

  // Calculate total slides based on tile and banner count
  let totalSlides = 1;

  if (tile === 1) {
    totalSlides = count;
  } else if (tile === 2) {
    // For tile 2, create overlapping slides if odd count
    totalSlides = count > 1 ? count - 1 : 1;
  } else if (tile === 3) {
    // For tile 3, create overlapping slides
    totalSlides = count > 2 ? count - 2 : 1;
  }

  // Auto-scroll effect
  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  // Get current banners to display
  const displayBanners = sortedBanners.slice(currentIndex, currentIndex + tile);

  // Responsive grid classes based on tile value
  const gridClass =
    tile === 1
      ? "grid-cols-1"
      : tile === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 w-full">
      <div className={`grid ${gridClass} gap-2 md:gap-6`}>
        {displayBanners.map((banner, idx) => (
          <Banner
            key={`${banner.id}-${idx}`}
            banner={banner}
            bannerCount={displayBanners.length}
          />
        ))}
      </div>

      {/* Banner navigation dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-stone-950 w-6" : "bg-stone-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerGrid;
