import React from "react";

const HeroBanner = ({ videoURL, brandName, description }) => {
  const handleVideoError = (e) => {};

  return (
    <div className="relative pb-20 md:pb-16">
      <div className="aspect-[17/9] overflow-hidden bg-gray-200">
        {videoURL ? (
          <video
            className="w-full h-full object-fill"
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
          >
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600">No video available</p>
          </div>
        )}
      </div>

      <div className="absolute w-[90%] max-w-2xl md:max-w-4xl -bottom-4 md:-bottom-10 left-0 right-0 bg-white p-4 md:p-8 mx-auto border border-black">
        <div className="max-w-4xl mx-auto h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
          {/* Left: Brand Name */}
          <h1 className="text-lg md:text-3xl font-light tracking-wide w-full md:w-[30%] text-black">
            {brandName}
          </h1>

          {/* Right: Description */}
          <p className="text-sm md:text-base text-gray-600 w-full md:w-[70%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
