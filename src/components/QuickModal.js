"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const QuickModal = ({ isOpen, onClose }) => {
  const [zipCode, setZipCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleZipCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length <= 6) {
      setZipCode(value);
    }
  };

  const handleCheck = () => {
    if (zipCode.length === 6) {
      setIsChecked(true);
    }
  };

  const handleClose = () => {
    setZipCode("");
    setIsChecked(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9999]"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] bg-white rounded-lg shadow-2xl w-[90%] max-w-md">
        {/* Close Button */}
        <button
          onClick={handleClose}
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

          {/* Zip Code Input */}
          {!isChecked && (
            <div className="space-y-4">
              <p className="text-gray-700 text-lg mb-4">
                Enter your 6-digit zip code
              </p>
              <input
                type="text"
                value={zipCode}
                onChange={handleZipCodeChange}
                placeholder="000000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-xl tracking-widest focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                maxLength={6}
              />
              <button
                onClick={handleCheck}
                disabled={zipCode.length !== 6}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                Check
              </button>
            </div>
          )}

          {/* After Check */}
          {isChecked && (
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently out of your area's league.
              <br />
              <span className="font-semibold text-purple-600">
                Manifest LaFetch harder.
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default QuickModal;
