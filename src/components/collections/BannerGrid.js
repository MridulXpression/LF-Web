import React from "react";
import Banner from "./Banner";

const BannerGrid = ({ banners = [], bannerCount }) => {
  if (!banners.length) return null;

  const displayBanners = banners.slice(0, 3);
  const count = bannerCount || displayBanners.length;

  const gridClass =
    count === 1 ? "grid-cols-1" : count === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className={`grid ${gridClass} w-full gap-4 md:gap-6`}>
      {displayBanners.map((banner) => (
        <Banner key={banner.id} bannerNumber={banner.id} />
      ))}
    </div>
  );
};

export default BannerGrid;
