"use client";
import React from "react";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const MenCarousel = () => {
  const query = "gender=1";
  const fetchBanners = useBanner(query);

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

export default MenCarousel;
