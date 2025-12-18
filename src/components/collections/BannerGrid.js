import React from "react";
import Banner from "./Banner";

const BannerGrid = ({ banners = [] }) => {
  if (!banners.length) return null;

  const displayBanners = banners.slice(0, 3);
  const count = displayBanners.length;

  const gridClass =
    count === 1 ? "grid-cols-1" : count === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className={`grid ${gridClass} w-full gap-0`}>
      {displayBanners.map((_, index) => (
        <Banner key={index} index={index} bannerCount={count} />
      ))}
    </div>
  );
};

export default BannerGrid;
