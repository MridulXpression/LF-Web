import Image from "next/image";
import React from "react";

const Banner = ({ bannerNumber }) => {
  // Use the global banner number to determine which image to show
  const imageSrc = `/images/banner-${bannerNumber}.png`;

  return (
    <div className="w-full h-[350px] relative bg-stone-100 overflow-hidden">
      <Image
        className="w-full h-full object-fill"
        src={imageSrc}
        alt={`Banner ${bannerNumber}`}
        fill
      />
    </div>
  );
};

export default Banner;
