import React from "react";

const HeroBanner = ({ videoURL, brandName, description }) => {
  const handleVideoError = (e) => {
    console.error("Video failed to load:", e);
  };

  return (
    <div className="relative">
      <div className="aspect-[21/9] overflow-hidden bg-gray-200">
        {videoURL ? (
          <video
            className="w-full h-full object-cover"
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

      <div className="absolute max-w-4xl -bottom-10 left-0 right-0 bg-white p-8 mx-auto border border-black">
        <div className="max-w-4xl mx-auto h-full flex items-center justify-between">
          {/* Left: Brand Name */}
          <h1 className="text-3xl font-light tracking-wide w-[30%] text-black">
            {brandName}
          </h1>

          {/* Right: Description */}
          <p className="text-gray-600 w-[70%]">
            Our brand blends creativity and craftsmanship to deliver
            premium-quality products that redefine style and comfort. With
            attention to detail and a focus on sustainability, we aim to inspire
            confidence through every piece we create. From design to delivery,
            our commitment to excellence ensures a seamless experience that
            reflects authenticity and innovation. {/* {Description}   */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
