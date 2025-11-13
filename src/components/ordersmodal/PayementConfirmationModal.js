import React from "react";
import { X } from "lucide-react";

const PaymentStatusModal = ({
  isOpen,
  onClose,
  status, // 'success' or 'failed'
  transactionId,
  paymentMethod,
  dateTime,
  amountPaid,
  onTrackOrder,
  onContinueShopping,
}) => {
  if (!isOpen) return null;

  const isSuccess = status === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6 pt-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isSuccess ? "Payment Completed" : "Payment Failed"}
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            {isSuccess
              ? "Thank you for choosing our collection."
              : "Unfortunately, your payment could not be processed."}
          </p>

          {/* Transaction Details */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              TRANSACTION DETAILS
            </h3>

            <div className="space-y-3">
              {/* Transaction ID */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Transaction ID</span>
                <span className="text-gray-900 font-medium text-sm">
                  #{transactionId || "N/A"}
                </span>
              </div>

              {/* Payment Method */}
              {paymentMethod && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Payment Method</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                      <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">
                      {paymentMethod}
                    </span>
                  </div>
                </div>
              )}

              {/* Date & Time */}
              {dateTime && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Date & Time</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {dateTime}
                  </span>
                </div>
              )}

              {/* Amount */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-gray-900 font-semibold">
                  {isSuccess ? "Amount Paid" : "Amount"}
                </span>
                <span
                  className={`font-bold text-lg ${
                    isSuccess ? "text-gray-900" : "text-red-600"
                  }`}
                >
                  Rs. {amountPaid || "0"}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            {isSuccess ? (
              <>
                <button
                  onClick={onTrackOrder}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Track Your Order
                </button>
                <button
                  onClick={onContinueShopping}
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onClose}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={onContinueShopping}
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusModal;
