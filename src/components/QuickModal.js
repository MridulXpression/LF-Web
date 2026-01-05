"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const QuickModal = ({ isOpen, onClose }) => {
  const [locationStatus, setLocationStatus] = useState("loading");
  // loading → asking browser
  // success → got location
  // error → user denied or failed

  useEffect(() => {
    if (!isOpen) return;

    // Ask browser for location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationStatus("success");
      },
      (err) => {
        setLocationStatus("error");
      }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9999]"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] bg-white rounded-lg shadow-2xl w-[90%] max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/images/quick.png"
              alt="Quick Icon"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* STEP 1 — Asking for location */}
          {locationStatus === "loading" && (
            <p className="text-gray-700 text-lg">
              Asking browser for your location…
              <br />
              <span className="text-sm text-gray-500">
                Please click **Allow** to continue.
              </span>
            </p>
          )}

          {/* STEP 2 — After we get location */}
          {locationStatus === "success" && (
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently out of your area's league.
              <br />
              <span className="font-semibold text-purple-600">
                Manifest LaFetch harder.
              </span>
            </p>
          )}

          {/* STEP 3 — If user denies location */}
          {locationStatus === "error" && (
            <p className="text-red-600 text-lg leading-relaxed">
              Location access denied.
              <br />
              <span className="text-gray-600 text-sm">
                Please allow location to check your area.
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default QuickModal;
