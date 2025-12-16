import React from "react";

const FashionVideoBackground = ({ videoUrl, heading1, heading2 }) => {
  return (
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden mt-[90px]  ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content - Right Side, Above Bottom */}
      <div className="absolute inset-0 flex items-end justify-end">
        <div className="text-right px-8 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
          <div className="space-y-1">
            <p className="text-sm md:text-base lg:text-lg font-light text-white tracking-[0.2em] uppercase leading-tight">
              {heading1}
            </p>
            <p className="text-sm md:text-base lg:text-lg font-light text-white tracking-[0.2em] uppercase leading-tight">
              {heading2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionVideoBackground;
