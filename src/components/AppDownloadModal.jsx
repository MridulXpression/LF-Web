"use client";
import { useEffect, useState } from "react";
import { X, Apple, Play } from "lucide-react";
import { FaAppStore } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiLogoPlayStore } from "react-icons/bi";
import Image from "next/image";
const AppDownloadModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const expiry = localStorage.getItem("luxuryAppPopup");

    if (!expiry || Date.now() > expiry) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1200); // soft delay
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(
      "luxuryAppPopup",
      Date.now() + 24 * 60 * 60 * 1000
    ); // show once per day
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md transition-opacity">

      {/* Modal */}
      <div className="relative bg-white w-[92%] max-w-lg rounded-2xl px-8 py-10 shadow-2xl animate-[fadeIn_0.4s_ease-out]">

        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6  hover:text-black transition"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">

          <h2 className="md:text-4xl font-semibold  tracking-wide uppercase flex justify-center gap-2">
            Experience 
            <Image src="/images/logo-black.svg"alt="LaFetch Logo" width={140}height={40}className="object-contain"/>
          </h2>

          <p className="text-sm md:text-base leading-relaxed max-w-sm mx-auto uppercase">
            Download our app and enjoy
            <span className="block font-medium text-black mt-1 uppercase">
              10% off your first order.
            </span>
          </p>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">

            {/* App Store */}
            <a
                href="https://apps.apple.com/in/app/lafetch-fetch-your-fashion/id6739497338"
                className="group flex items-center justify-center gap-3 px-6 py-3 
                        border border-black rounded-md
                        text-sm uppercase tracking-wide
                        hover:bg-black hover:text-white transition-all duration-300"
            >
                <FaAppStore size={20}/>
                App Store
            </a>

            {/* Play Store */}
            <a
                href="https://play.google.com/store/apps/details?id=com.lafetch.customer&hl=en_IN"
                className="group flex items-center justify-center gap-3 px-6 py-3 
                        border border-black rounded-md
                        text-sm uppercase tracking-wide
                        hover:bg-black hover:text-white transition-all duration-300"
            >
                <BiLogoPlayStore size={20}/>
                Google Play
            </a>

            </div>

       

        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;
