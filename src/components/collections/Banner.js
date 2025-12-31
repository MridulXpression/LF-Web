import Image from "next/image";
import React from "react";

const Banner = ({ banner }) => {
  const handleClick = () => {
    if (banner.redirectUrl) {
      window.open(banner.redirectUrl, "_blank");
    }
  };

  return (
    <div
      className={`w-full h-[350px] relative bg-stone-100 overflow-hidden ${
        banner.redirectUrl ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <Image
        className="w-full h-full object-contain md:object-fill"
        src={banner.imageUrl}
        alt={`Banner ${banner.id}`}
        fill
        unoptimized
      />
    </div>
  );
};

export default Banner;
