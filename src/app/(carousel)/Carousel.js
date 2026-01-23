"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const HomeCarousel = () => {
  const fetchBanners = useBanner();

  if (!fetchBanners || fetchBanners.length === 0) {
    return null;
  }

  // Pass all banners to the carousel component
  return (
    <div>
      <BannerCarousel banners={fetchBanners} />
    </div>
  );
};

export default HomeCarousel;
