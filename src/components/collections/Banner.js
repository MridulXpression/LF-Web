import Image from "next/image";
import React from "react";

const Banner = ({ banner, bannerCount }) => {
  const handleClick = () => {
    if (banner.redirectUrl) {
      window.location.href = banner.redirectUrl;
    }
  };

  // Height based on banner count
  const heightClass =
    bannerCount === 1
      ? "h-[130px] md:h-[140px] md:h-[400px]"
      : "h-[180px] sm:h-[220px] md:h-[400px]";

  // Check if the banner is a video based on file extension
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const mediaUrl = banner.imageUrl || banner.videoUrl || banner.url;
  const isVideoContent = isVideo(mediaUrl);

  return (
    <div
      className={`w-full ${heightClass} relative overflow-hidden ${
        banner.redirectUrl ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      {isVideoContent ? (
        <video
          className="w-full h-full object-fill rounded-xl"
          src={mediaUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          className="w-full h-full object-fill rounded-xl"
          src={mediaUrl}
          alt={`Banner ${banner.id}`}
          fill
          unoptimized
        />
      )}
    </div>
  );
};

export default Banner;
