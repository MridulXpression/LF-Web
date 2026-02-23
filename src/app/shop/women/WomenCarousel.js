"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const WomenCarousel = () => {
  const query = "gender=2&isCartBanner=false&status=true";
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

export default WomenCarousel;
