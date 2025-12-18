import React from "react";

const Banner = ({ index, bannerCount }) => {
  // Determine which image to use based on total banner count
  let imageSrc;

  if (bannerCount === 1) {
    // For 1 banner, use banner-large.svg
    imageSrc = "/images/banner-large.svg";
  } else if (bannerCount === 2) {
    // For 2 banners, use banner-1.png or banner-2.png
    imageSrc = `/images/banner-${index + 1}.png`;
  } else if (bannerCount === 3) {
    // For 3 banners, use banner-1.png, banner-2.png, or banner-3.png
    imageSrc = `/images/banner-${index + 1}.png`;
  } else {
    // Default fallback
    imageSrc = `/images/banner-${index + 1}.png`;
  }

  return (
    <div className="w-full h-[300px] relative bg-stone-100 overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={imageSrc}
        alt={`Banner ${index + 1}`}
      />
    </div>
  );
};

export default Banner;
