"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const MenCarousel = () => {
  const query = "gender=1&isCartBanner=false";
  const fetchBanners = useBanner(query);

  if (!fetchBanners || fetchBanners.length === 0) {
    return null;
  }

  return (
    <div>
      <BannerCarousel banners={fetchBanners} />
    </div>
  );
};

export default MenCarousel;
