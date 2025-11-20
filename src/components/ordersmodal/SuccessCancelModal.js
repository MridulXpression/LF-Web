"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const SuccessCancelModal = ({ product, orderItem, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-black">Order Cancelled</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-gray-700 text-sm mb-4">
            Your item has been cancelled successfully and a refund has been
            initiated.
          </p>

          <div className="flex gap-4">
            {product?.imageUrls?.[0] && (
              <Image
                src={product.imageUrls[0]}
                alt={product.title}
                width={80}
                height={80}
                className="w-20 h-20 rounded-md object-cover"
              />
            )}

            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{product?.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Quantity: <b>{orderItem?.quantity}</b>
              </p>
              <p className="text-sm text-gray-900 font-semibold mt-1">
                ₹{parseFloat(orderItem?.total).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
            Refund will be credited within 24–48 working hours.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessCancelModal;
