"use client";
import React, { useState } from "react";
import { MapPin, Truck, RefreshCw, Shield } from "lucide-react";

const DeliveryOptions = ({ pincode, deliveryInfo, onCheckPincode }) => {
  const [pin, setPin] = useState(pincode || "");

  const handleCheck = () => {
    if (onCheckPincode) {
      onCheckPincode(pin);
    }
  };

  return (
    <div className="border-t pt-5 space-y-4">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
        Delivery Options
      </h3>

      <div className="flex gap-2">
        <div className="flex-1 flex items-center gap-2 border rounded px-3 py-2.5">
          <MapPin className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter pincode"
            className="flex-1 outline-none text-sm"
            maxLength={6}
          />
        </div>
        <button
          onClick={handleCheck}
          className="px-5 py-2.5 text-pink-600 font-bold text-sm hover:bg-pink-50 transition-colors"
        >
          CHECK
        </button>
      </div>

      {deliveryInfo && (
        <div className="space-y-3 pt-2">
          {deliveryInfo.map((info, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
              {info.icon === "truck" && (
                <Truck className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
              )}
              {info.icon === "refresh" && (
                <RefreshCw className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
              )}
              {info.icon === "shield" && (
                <Shield className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <p className="font-semibold text-gray-900">{info.title}</p>
                {info.description && (
                  <p className="text-gray-600 text-xs mt-0.5">
                    {info.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DeliveryOptions;
