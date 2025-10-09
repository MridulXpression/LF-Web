"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import Link from "next/link";

const OrderSummary = ({ products, onProceed, coupons = [] }) => {
  const pathname = usePathname(); // ✅ get current route
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Calculate subtotal
  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const deliveryCharges = 0;
  const convenienceFee = 0;

  // Apply coupon logic
  const calculateDiscount = (coupon) => {
    if (!coupon || !coupon.discountType) return 0;

    const discountPercent = parseFloat(coupon.discountType.replace("%", ""));
    const discountAmount = (subtotal * discountPercent) / 100;

    // Respect max discount cap
    return Math.min(discountAmount, coupon.maxDiscountCap || discountAmount);
  };

  const totalDiscount = appliedDiscount || 0;
  const totalPrice =
    subtotal + deliveryCharges + convenienceFee - totalDiscount;

  const handleApplyCoupon = (coupon) => {
    const discountValue = calculateDiscount(coupon);
    setAppliedDiscount(discountValue);
    setSelectedCoupon(coupon);
    setShowModal(false);
  };

  const isAddressPage = pathname === "/checkout/address"; // ✅ check route

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      {/* Coupons Section — Hide on /checkout/address */}
      {!isAddressPage && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-black">COUPONS</span>
            <button
              onClick={() => setShowModal(true)}
              className="text-sm text-blue-600 hover:underline"
            >
              VIEW MORE
            </button>
          </div>

          {coupons.length > 0 ? (
            <div className="border rounded p-2 text-sm text-black">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{coupons[0].name}</span>
                <button
                  onClick={() => handleApplyCoupon(coupons[0])}
                  className="text-blue-600 text-xs underline"
                >
                  Apply
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {coupons[0].description || "No description"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Discount: {coupons[0].discountType}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No coupons available</p>
          )}

          {selectedCoupon && (
            <div className="mt-3 bg-green-100 p-2 rounded text-sm text-black">
              Applied Coupon: <strong>{selectedCoupon.code}</strong> (
              {selectedCoupon.discountType})
            </div>
          )}
        </div>
      )}

      {/* Order Details */}
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-4 text-black">ORDER DETAILS</h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-black">Subtotal</span>
            <span className="font-semibold text-black">
              ₹{subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-black">Delivery Charges</span>
            <span className="text-green-600">
              {deliveryCharges === 0 ? "Free" : `₹${deliveryCharges}`}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-black">Convenience Fee</span>
            <span className="text-black">
              {convenienceFee === 0 ? "₹0" : `₹${convenienceFee}`}
            </span>
          </div>

          {totalDiscount > 0 && (
            <div className="flex justify-between text-black">
              <span>Discount Applied</span>
              <span>- ₹{totalDiscount.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="font-semibold text-black">Total Price</span>
          <span className="font-bold text-lg text-black">
            ₹{totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Proceed Button — Hide on /checkout/address */}
      {!isAddressPage && (
        <Link
          href="/checkout/address"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors font-medium mt-4 inline-block text-center"
        >
          Proceed to Checkout
        </Link>
      )}

      {/* Coupon Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-96 max-h-[80vh] overflow-y-auto shadow-lg relative p-6">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold text-black mb-4">
              Available Coupons
            </h2>

            {coupons.length > 0 ? (
              <div className="space-y-4">
                {coupons.map((coupon) => (
                  <div
                    key={coupon.id}
                    className="border rounded p-3 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-black">
                          {coupon.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          Code: <span className="font-mono">{coupon.code}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => handleApplyCoupon(coupon)}
                        className="text-xs text-blue-600 underline"
                      >
                        Apply
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {coupon.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      Discount: {coupon.discountType}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No coupons available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
