"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { X } from "lucide-react";
import axiosHttp from "@/utils/axioshttp";
import { toast } from "react-hot-toast";
import SuccessCancelModal from "./SuccessCancelModal";

const CANCELLATION_REASONS = {
  25: "Other",
  26: "Changed my mind",
  27: "Does not fit",
  28: "Size not as expected",
  29: "Item is damaged",
  30: "Received wrong item",
  31: "Parcel damaged on arrival",
  32: "Quality not as expected",
  33: "Missing item or accessories",
  34: "Performance not adequate",
  35: "Not as described",
  36: "Arrived too late",
};

const CancelOrderModal = ({
  order,
  onClose = () => {},
  onSuccess = () => {},
}) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  if (!order) return null;

  const orderItem = order;
  const product = orderItem.product || {};
  const orderDetails = orderItem.order || {};

  const handleSubmit = async () => {
    if (!selectedReason) {
      toast.error("Please select a cancellation reason");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        userId: userId,
        orderItemId: orderItem.id,
        reason: selectedReason,
        shipRocketId: orderDetails.shiprocketOrderId || "",
      };

      console.log("Submitting cancellation payload:", payload);

      const response = await axiosHttp.post(`/request-cancel`, payload);

      if (response.data.status === 200) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to cancel order");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white  max-w-md w-full md:h-[450px] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Cancel Order</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isSubmitting}
          >
            <X size={24} />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-4">
            {product.imageUrls?.[0] && (
              <img
                src={product.imageUrls[0]}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            )}
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {product.title || "Product"}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Quantity: {orderItem.quantity}</p>
                <p className="font-semibold text-gray-900">
                  ₹{parseFloat(orderItem.total).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {orderDetails.shiprocketOrderId && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-black">Order ID: {orderItem.id}</p>
            </div>
          )}
        </div>

        {/* Dropdown for Cancellation Reasons */}
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Why do you wish to cancel this order?
          </label>

          <div className="relative">
            {/* Selected reason display */}
            <button
              type="button"
              onClick={() => setShowDropdown((prev) => !prev)}
              disabled={isSubmitting}
              className="w-full text-left p-3 border border-gray-300 rounded-md bg-white text-sm text-gray-700 flex justify-between items-center"
            >
              {selectedReason || "-- Select a reason --"}
              <span className="ml-2 text-black">&#9662;</span>
            </button>

            {/* Scrollable dropdown menu */}
            {showDropdown && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 text-black rounded-md shadow-lg max-h-40 overflow-y-auto">
                {Object.entries(CANCELLATION_REASONS).map(([id, reason]) => (
                  <div
                    key={id}
                    onClick={() => {
                      setSelectedReason(reason);
                      setShowDropdown(false);
                    }}
                    className={`p-2 cursor-pointer text-sm ${
                      selectedReason === reason
                        ? "bg-gray-100 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {reason}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 border-2 border-gray-300  font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !selectedReason}
            className="flex-1 px-4 py-3 bg-black text-white  font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Cancel Item"}
          </button>
        </div>

        {showSuccessModal && (
          <SuccessCancelModal
            product={product}
            orderItem={orderItem}
            onClose={() => {
              setShowSuccessModal(false);
              onClose(); // closes cancel modal
              onSuccess(); // refresh order list AFTER everything closes
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CancelOrderModal;
