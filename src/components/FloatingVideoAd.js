"use client";

import axiosHttp from "@/utils/axioshttp";
import { useState, useEffect } from "react";

export default function FloatingVideoAd() {
  const [videoData, setVideoData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideoAd = async () => {
      try {
        const response = await axiosHttp.get(`/video-ad?status=true`);
        const data = response.data;

        if (data.status === 200 && data.data && data.data.length > 0) {
          setVideoData(data.data[0]);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoAd();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (isLoading || !isVisible || !videoData || !videoData.isActive) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] shadow-2xl rounded-lg overflow-hidden">
      <div className="relative bg-black">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black text-white rounded-full p-1.5 transition-all duration-200 hover:scale-110 cursor-pointer"
          aria-label="Close video ad"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Video Player */}
        <video
          src={videoData.webVideoURL}
          autoPlay
          loop
          muted
          playsInline
          className="w-[350px] h-[200px] object-fill"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
