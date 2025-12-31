"use client";
import React from "react";
import Image from "next/image";

const BannerCarousel = ({ image }) => {
  return (
    <div className="w-full bg-white relative pt-[10px] md:min-h-[40vh]">
      <div className="w-full max-w-full mx-auto">
        <div className="relative h-[140px] md:h-[500px] overflow-hidden">
          <Image
            src={image}
            alt="Banner"
            width={1800}
            height={600}
            className="object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
