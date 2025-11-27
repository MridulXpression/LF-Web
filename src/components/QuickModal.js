"use client";

import { X } from "lucide-react";
import Image from "next/image";

const QuickModal = ({ isOpen, onClose }) => {
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

        {/* Modal Content */}
        <div className="p-8 text-center">
          {/* Icons Container */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/images/quick.png"
              alt="Quick Icon"
              width={80}
              height={80}
              className="object-contain"
            />
            {/* <Image
              src="/images/logo.png"
              alt="LaFetch Logo"
              width={80}
              height={80}
              className="object-contain"
            /> */}
          </div>

          {/* Message */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Currently out of your area's league.
            <br />
            <span className="font-semibold text-purple-600">
              Manifest LaFetch harder.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default QuickModal;
