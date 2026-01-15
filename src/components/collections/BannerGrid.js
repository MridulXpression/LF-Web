import React from "react";
import Banner from "./Banner";

const BannerGrid = ({ banners = [], bannerCount, displayFor = "homepage" }) => {
  if (!banners.length) return null;

  // Filter banners based on displayFor
  const filteredBanners = banners.filter((banner) => {
    if (!banner.displayFor || !Array.isArray(banner.displayFor)) return true;
    return banner.displayFor.includes(displayFor);
  });

  if (!filteredBanners.length) return null;

  // Sort banners by position
  const sortedBanners = [...filteredBanners].sort(
    (a, b) => a.position - b.position
  );
  const displayBanners = sortedBanners.slice(0, 3);
  const count = displayBanners.length;

  // Responsive grid classes based on banner count
  const gridClass =
    count === 1
      ? "grid-cols-1"
      : count === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div
      className={`grid ${gridClass} py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 w-full gap-2 md:gap-6`}
    >
      {displayBanners.map((banner) => (
        <Banner key={banner.id} banner={banner} bannerCount={count} />
      ))}
    </div>
  );
};

export default BannerGrid;
