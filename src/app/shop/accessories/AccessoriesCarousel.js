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
    return (
      <div className="w-full bg-white relative min-h-[50vh] md:min-h-[60vh] lg:min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600">Loading banners...</p>
      </div>
    );
  }

  return (
    <div>
      <BannerCarousel slides={slides} />
    </div>
  );
};

export default AccessoriesCarousel;
