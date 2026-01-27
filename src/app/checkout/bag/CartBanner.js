"use client";
import React, { useState } from "react";
import useBanner from "@/hooks/useBanner";
import Image from "next/image";

const CartBanner = () => {
  const banners = useBanner("isCartBanner=true");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < banners.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to first
    }
  };

  // Helper function to check if URL is a video
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  // Don't render if no banners
  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-2 px-4 md:px-8 relative">
      {/* Static Text */}
      <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
        <h2 className="text-black text-2xl md:text-3xl font-bold tracking-wide">
          WE HAVE MORE FOR YOU
        </h2>
        {/* Show arrow only if more than 1 banner */}
        {banners.length > 1 && (
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 bg-white cursor-pointer transition-colors"
            aria-label="Next banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Banner Images */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{
            transform:
              banners.length > 1
                ? `translateX(-${currentIndex * 75}%)`
                : "translateX(0)",
          }}
        >
          {banners.map((banner, index) => {
            const mediaUrl = banner.image || banner.imageUrl;
            const isVideoContent = isVideo(mediaUrl);
            const hasRedirectUrl =
              banner.redirectUrl && banner.redirectUrl.trim() !== "";

            const mediaContent = isVideoContent ? (
              <video
                src={mediaUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={mediaUrl}
                alt={banner.title || `Banner ${index + 1}`}
                fill
                className="object-fill"
                priority={index === 0}
              />
            );

            return (
              <div
                key={banner._id || index}
                className={`flex-shrink-0 ${
                  banners.length > 1 ? "w-[72%]" : "w-full"
                }`}
              >
                <div className="relative w-full h-64 md:h-[450px] rounded-lg overflow-hidden">
                  {hasRedirectUrl ? (
                    <a
                      href={banner.redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      {mediaContent}
                    </a>
                  ) : (
                    mediaContent
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartBanner;
