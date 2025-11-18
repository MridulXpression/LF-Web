import React, { useState, useEffect } from "react";
import { ArrowLeft, Package, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  openReturnModal,
  openCancelModal,
} from "@/redux/slices/loginmodalSlice";

const OrderDetailView = ({ orderId, onBack, axiosHttp }) => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const response = await axiosHttp.get(`/view-order-history/${orderId}`);
        if (response.data.status === 200) {
          setOrderData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId, axiosHttp]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusSteps = (status) => {
    const lower = status?.toLowerCase() || "";

    // Normal flow (for most orders)
    const steps = [
      { key: "confirmed", labels: ["order confirmed", "confirmed"] },
      {
        key: "shipped",
        labels: [
          "shipped",
          "in transit",
          "handover to courier",
          "shipment booked",
        ],
      },
      { key: "out_for_delivery", labels: ["out for delivery"] },
      { key: "delivered", labels: ["delivered", "partial_delivered"] },
    ];

    // Cancelled before dispatch
    if (
      [
        "cancelled",
        "canceled",
        "cancellation requested",
        "cancelled_before_dispatched",
      ].includes(lower)
    ) {
      return [
        {
          label: "Order Confirmed",
          date: orderData?.order?.orderedAt,
          active: true,
          completed: true,
        },
        {
          label: "Cancelled",
          date: orderData?.cancelledAt,
          active: true,
          completed: true,
          isCancelled: true,
        },
      ];
    }

    // RTO Flow
    if (
      [
        "rto initiated",
        "rto delivered",
        "rto_ofd",
        "rto_ndr",
        "rto in intransit",
      ].includes(lower)
    ) {
      return [
        {
          label: "Shipped",
          active: true,
          completed: true,
        },
        {
          label: "RTO Initiated",
          active: true,
          completed: ["rto delivered"].includes(lower),
        },
        {
          label: "Returned to Seller",
          active: ["rto delivered"].includes(lower),
          completed: ["rto delivered"].includes(lower),
        },
      ];
    }

    let finalSteps = [];

    steps.forEach((step, index) => {
      let isCompleted = step.labels.includes(lower);
      let isActive =
        step.labels.includes(lower) ||
        (index === 0 && !step.labels.includes(lower));

      finalSteps.push({
        label:
          step.key === "confirmed"
            ? "Order Confirmed"
            : step.key === "shipped"
            ? "Shipped"
            : step.key === "out_for_delivery"
            ? "Out For Delivery"
            : "Delivered",
        date: step.key === "delivered" ? orderData?.order?.deliveredAt : null,
        active: isActive,
        completed: isCompleted,
      });
    });

    return finalSteps;
  };

  const getActionButtons = (status) => {
    const lower = status?.toLowerCase() || "";

    if (lower === "delivered") {
      return [
        { label: "Return", action: "return" },
        { label: "Exchange", action: "exchange" },
      ];
    }

    if (
      lower === "confirmed" ||
      lower === "order confirmed" ||
      lower === "shipped"
    ) {
      return [{ label: "Cancel Item", action: "cancel" }];
    }

    if (lower === "cancelled") {
      return [
        {
          label: "Refund",
          action: "refund",
          info: orderData?.order?.deliveredAt,
        },
      ];
    }

    return [];
  };

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p className="text-center text-gray-600">Order not found</p>
      </div>
    );
  }

  const { product, order, quantity, total, status } = orderData;
  const statusSteps = getStatusSteps(status);
  const actionButtons = getActionButtons(status);

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <p className="text-sm text-gray-600">
          Order ID:{" "}
          <span className="font-semibold text-gray-900">#{orderId}</span>
        </p>
      </div>

      {/* Product Card */}
      <div className="bg-white  p-4 mb-6">
        <div className="flex gap-4">
          <Image
            src={product?.imageUrls?.[0] || "/placeholder.jpg"}
            alt={product?.title}
            width={80}
            height={80}
            className=" object-cover rounded border "
          />
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 mb-1">
              {product?.title}
            </h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-1">
              {product?.shortDescription ||
                product?.description?.substring(0, 100)}
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>
                Qty: <span className="font-medium">{quantity}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Estimate */}
      <div className="bg-white  p-4 mb-6">
        <p className="text-gray-900 font-medium mb-1">
          {order?.deliveredAt
            ? `Delivered on ${formatDate(order.deliveredAt)}`
            : `Arriving By ${formatDate(
                order?.deliveredAt ||
                  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
              )}`}
        </p>
        <p className="text-sm text-gray-500">
          {status?.toLowerCase() === "delivered"
            ? "Your order has been delivered"
            : "Your item has been packed"}
        </p>
      </div>

      {/* Order Progress */}
      <div className="bg-white rounded-lg  p-6 mb-6">
        {/* Progress Bar */}
        <div className="relative mb-8 px-4">
          <div className="relative">
            {/* Background Line */}
            <div
              className="absolute left-0 right-0 h-0.5 bg-gray-200"
              style={{ top: "16px", zIndex: 0 }}
            ></div>

            {/* Active Progress Line */}
            <div
              className={`absolute left-0 h-0.5 ${
                status?.toLowerCase() === "cancelled"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
              style={{
                top: "16px",
                width: `${(() => {
                  const activeIndex = statusSteps.findIndex(
                    (s) => s.active || s.completed
                  );
                  const total = statusSteps.length - 1;
                  if (activeIndex === -1) return 0;
                  return (activeIndex / total) * 100;
                })()}%`,

                zIndex: 1,
              }}
            ></div>

            {statusSteps.map((step, index) => {
              const totalSteps = statusSteps.length;
              const leftPosition =
                totalSteps === 1
                  ? "50%"
                  : `${(index / (totalSteps - 1)) * 100}%`;

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: leftPosition,
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      step.isCancelled
                        ? "bg-white border-2 border-red-500"
                        : step.completed
                        ? "bg-green-500"
                        : step.active
                        ? "bg-white border-2 border-green-500"
                        : "bg-white border-2 border-gray-300"
                    }`}
                  >
                    {step.isCancelled ? (
                      <XCircle className="w-4 h-4 text-red-500" />
                    ) : step.completed ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <div
                        className={`w-2 h-2 rounded-full ${
                          step.active ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>
                  <p
                    className={`text-xs font-medium text-center whitespace-nowrap ${
                      step.isCancelled
                        ? "text-red-600"
                        : step.active || step.completed
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  {step.date && (
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(step.date)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {/* Spacer for absolute positioned content */}
          <div style={{ height: "80px" }}></div>
        </div>

        {/* Action Buttons */}
        {actionButtons.length > 0 && (
          <div className="mt-6">
            <div className="flex gap-3">
              {actionButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (button.action === "cancel") {
                      dispatch(openCancelModal(orderData));
                    }
                    if (button.action === "return") {
                      dispatch(openReturnModal(orderData));
                    }
                    // Exchange & Review are handled in parent (optional)
                  }}
                  className="flex-1 py-3 text-sm font-medium transition-colors border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  {button.label}
                  {button.info && (
                    <span className="block text-xs text-gray-500 mt-1">
                      {formatDate(button.info)}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4">SUMMARY</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Delivery Details - Empty for now */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">DELIVERY DETAILS</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-500 italic">
                Address details will be displayed here
              </p>
            </div>
          </div>

          {/* Price Details */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">PRICE DETAILS</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total MRP</span>
                <span className="font-medium text-gray-900">
                  ₹{order?.totalMRP || "0.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Charges</span>
                <span className="font-medium text-gray-900">
                  ₹{order?.shippingCost || "0.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount on MRP</span>
                <span className="font-medium text-gray-900">
                  -₹{order?.couponDiscount || "0.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax & Charges</span>
                <span className="font-medium text-gray-900">
                  ₹{order?.tax || "0.00"}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 font-semibold">
                <span className="text-gray-900">BILL TOTAL</span>
                <span className="text-gray-900">₹{order?.total || total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailView;
