"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const AccessoriesCarousel = () => {
  const query = "gender=3";
  const fetchBanners = useBanner(query);

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

export default AccessoriesCarousel;
