"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OrderCard from "@/components/ordersmodal/MyOrders";
import axiosHttp from "@/utils/axioshttp";
import { useSelector, useDispatch } from "react-redux";

import ReviewOrderModal from "@/components/ordersmodal/ReviewOrder";
import CancelOrderModal from "@/components/ordersmodal/CancelOrder";
import ReturnModal from "@/components/ordersmodal/ReturnOrder";
import ExchangeOrderModal from "@/components/ordersmodal/ExchangeOrder";
import OrderDetailView from "@/components/ordersmodal/OrderDetailView";

import {
  openReturnModal,
  closeReturnModal,
  openCancelModal,
  closeCancelModal,
  openExchangeModal,
  closeExchangeModal,
} from "@/redux/slices/loginmodalSlice";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // for review only
  const [viewMode, setViewMode] = useState("list");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;
  const router = useRouter();

  // Redirect if user is not authenticated
  useEffect(() => {
    if (!userId) {
      router.push("/"); // Redirect to home or login page
    }
  }, [userId, router]);

  const {
    openReturnModal: isReturnOpen,
    cancelModal: isCancelOpen,
    exchangeModal: isExchangeOpen,
    selectedProduct,
  } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await axiosHttp.get(`/order-history/${userId}`);
      if (response.data.status === 200) {
        setOrders(response.data.data.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Handle actions passed from card
  const handleOrderAction = (order, actionType) => {
    setSelectedOrder(order);

    if (actionType === "return") {
      dispatch(openReturnModal(order));
    }

    if (actionType === "cancel") {
      dispatch(openCancelModal(order));
    }

    if (actionType === "review") {
      setActiveModal("review");
    }

    if (actionType === "exchange") {
      dispatch(openExchangeModal(order));
    }
  };

  // Card click → view details
  const handleCardClick = (orderId) => {
    setSelectedOrderId(orderId);
    setViewMode("detail");
  };

  const handleBack = () => {
    setSelectedOrderId(null);
    setViewMode("list");
  };

  if (viewMode === "detail" && selectedOrderId) {
    return (
      <>
        <OrderDetailView
          orderId={selectedOrderId}
          onBack={handleBack}
          axiosHttp={axiosHttp}
        />

        {/* RETURN MODAL */}
        {isReturnOpen && (
          <ReturnModal
            order={selectedProduct}
            onClose={() => dispatch(closeReturnModal())}
            onSuccess={fetchOrders}
          />
        )}

        {/* CANCEL MODAL */}
        {isCancelOpen && (
          <CancelOrderModal
            order={selectedProduct}
            onClose={() => dispatch(closeCancelModal())}
            onSuccess={fetchOrders}
          />
        )}

        {/* EXCHANGE MODAL */}
        {isExchangeOpen && (
          <ExchangeOrderModal
            order={selectedProduct}
            onClose={() => dispatch(closeExchangeModal())}
            onSuccess={fetchOrders}
          />
        )}
      </>
    );
  }

  const filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) =>
          order.status?.toLowerCase().includes(selectedStatus)
        );

  // Main layout
  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Orders</h1>
        {/* STATUS FILTER */}
        <div className="flex flex-wrap gap-3 mt-4 mb-6">
          {[
            "all",
            "pending",
            "confirmed",
            "delivered",
            "cancelled",
            "returned",
            "exchanged",
          ].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 text-sm rounded-full border transition cursor-pointer ${
                selectedStatus === status
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        <p className="text-gray-600">
          Track, return, cancel, review, or exchange your orders
        </p>
      </div>

      {/* Orders list */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-600 font-medium">
            No order details found for{" "}
            <span className="capitalize">
              {selectedStatus === "all" ? "all orders" : selectedStatus}
            </span>
          </p>
        </div>
      ) : (
        filteredOrders.map((order) => (
          <div key={order.id} onClick={() => handleCardClick(order.id)}>
            <OrderCard order={order} onAction={handleOrderAction} />
          </div>
        ))
      )}

      {/* RETURN MODAL (Redux) */}
      {isReturnOpen && (
        <ReturnModal
          order={selectedProduct}
          onClose={() => dispatch(closeReturnModal())}
          onSuccess={fetchOrders}
        />
      )}

      {/* CANCEL MODAL (Redux) */}
      {isCancelOpen && (
        <CancelOrderModal
          order={selectedProduct}
          onClose={() => dispatch(closeCancelModal())}
          onSuccess={fetchOrders}
        />
      )}

      {/* EXCHANGE MODAL (Redux) */}
      {isExchangeOpen && (
        <ExchangeOrderModal
          order={selectedProduct}
          onClose={() => dispatch(closeExchangeModal())}
          onSuccess={fetchOrders}
        />
      )}

      {/* REVIEW MODAL (Local state) */}
      {activeModal === "review" && (
        <ReviewOrderModal
          order={selectedOrder}
          onClose={() => setActiveModal(null)}
          onSuccess={fetchOrders}
        />
      )}
    </div>
  );
};

export default MyOrders;
