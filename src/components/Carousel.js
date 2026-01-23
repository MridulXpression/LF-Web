"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BannerCarousel = ({ image, banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If multiple banners are provided, use carousel mode
  const isMultiple = banners && banners.length > 0;
  const slides = isMultiple ? banners : [{ image, redirectUrl: null }];

  useEffect(() => {
    if (isMultiple && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMultiple, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];
  const currentImage = currentSlide?.image;
  const redirectUrl = currentSlide?.redirectUrl;

  // Check if the URL is a video
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(currentImage);

  const carouselContent = (
    <div className="relative h-[140px] md:h-[400px] w-full overflow-hidden">
      {isVideo ? (
        <video
          src={currentImage}
          autoPlay
          loop
          muted
          playsInline
          className="object-fill w-full h-full"
        />
      ) : (
        <Image
          src={currentImage}
          alt="Banner"
          fill
          className="object-fill w-full h-full"
          loading="lazy"
          sizes="100vw"
        />
      )}
    </div>
  );

  return (
    <div className="py-4 px-4 sm:px-6 md:px-10 bg-white relative">
      <div className="w-full">
        {redirectUrl ? (
          <Link href={redirectUrl}>{carouselContent}</Link>
        ) : (
          carouselContent
        )}

        {/* Navigation Dots */}
        {isMultiple && slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-black w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerCarousel;
