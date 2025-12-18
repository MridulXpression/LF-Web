import React from "react";

const FashionVideoBackground = ({ videoUrl, heading1, heading2, heading3 }) => {
  return (
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden mt-[150px]  ">
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
      <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-b from-black/0 to-black/70">
        <div className="text-right px-8 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
          <div className="space-y-1">
            <p className="text-sm md:text-3xl font-bold text-white traking-wide  uppercase leading-tight">
              {heading1}
            </p>
            <p className="text-sm md:text-5xl font-bold text-white  uppercase leading-tight">
              {heading2}
            </p>
            <p className="text-sm md:text-4xl font-normal text-white tracking-wide uppercase leading-tight">
              {heading3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionVideoBackground;
