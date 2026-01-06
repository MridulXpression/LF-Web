import React from "react";
import Banner from "./Banner";

const BannerGrid = ({ banners = [], bannerCount }) => {
  if (!banners.length) return null;

  // Sort banners by position
  const sortedBanners = [...banners].sort((a, b) => a.position - b.position);
  const displayBanners = sortedBanners.slice(0, 3);
  const count = bannerCount || displayBanners.length;

  // Responsive grid classes based on banner count
  const gridClass =
    count === 1
      ? "grid-cols-1"
      : count === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridClass} w-full gap-2 md:gap-6`}>
      {displayBanners.map((banner) => (
        <Banner key={banner.id} banner={banner} bannerCount={count} />
      ))}
    </div>
  );
};

export default BannerGrid;
