"use client";
import React from "react";
import Link from "next/link";
import useBanner from "@/hooks/useBanner";
import BannerCarousel from "@/components/Carousel";

const HomeCarousel = () => {
  const fetchBanners = useBanner();

  // Get the first banner image and redirect URL
  const bannerImage = fetchBanners?.[0]?.image;
  const redirectUrl = fetchBanners?.[0]?.redirectUrl;

  if (!bannerImage) {
    return null;
  }

  return (
    <div>
      {redirectUrl ? (
        <Link href={redirectUrl}>
          <BannerCarousel image={bannerImage} />
        </Link>
      ) : (
        <BannerCarousel image={bannerImage} />
      )}
    </div>
  );
};

export default HomeCarousel;
