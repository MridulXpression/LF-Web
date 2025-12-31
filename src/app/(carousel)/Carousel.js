"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const HomeCarousel = () => {
  const fetchBanners = useBanner();

  // Get the first banner image
  const bannerImage = fetchBanners?.[0]?.image;

  if (!bannerImage) {
    return null;
  }

  return (
    <div>
      <BannerCarousel image={bannerImage} />
    </div>
  );
};

export default HomeCarousel;
