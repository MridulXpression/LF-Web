import Image from "next/image";
import React from "react";

const Banner = ({ banner, bannerCount }) => {
  const handleClick = () => {
    if (banner.redirectUrl) {
      window.open(banner.redirectUrl, "_blank");
    }
  };

  // Height based on banner count
  const heightClass =
    bannerCount === 1
      ? "h-[130px] md:h-[140px] md:h-[400px]"
      : "h-[180px] sm:h-[220px] md:h-[400px]";

  return (
    <div
      className={`w-full ${heightClass} relative overflow-hidden ${
        banner.redirectUrl ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <Image
        className="w-full h-full object-cover rounded-xl"
        src={banner.imageUrl}
        alt={`Banner ${banner.id}`}
        fill
        unoptimized
      />
    </div>
  );
};

export default Banner;
