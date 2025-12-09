"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const HomeCarousel = () => {
  const fetchBanners = useBanner();

  // Transform the API response to match Carousel component's expected format
  const slides =
    fetchBanners?.map((banner) => ({
      image: banner.image,
    })) || [];

  if (!fetchBanners || fetchBanners.length === 0) {
    return null;
  }

  return (
    <div>
      <BannerCarousel slides={slides} />
    </div>
  );
};

export default HomeCarousel;
