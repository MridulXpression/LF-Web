"use client";
import React, { useState, useEffect } from "react";
import OrderCard from "@/components/ordersmodal/MyOrders";
import axiosHttp from "@/utils/axioshttp";
import { useSelector, useDispatch } from "react-redux";

import ReviewOrderModal from "@/components/ordersmodal/ReviewOrder";
import CancelOrderModal from "@/components/ordersmodal/CancelOrder";
import ReturnModal from "@/components/ordersmodal/ReturnOrder";
import OrderDetailView from "@/components/ordersmodal/OrderDetailView";

import {
  openReturnModal,
  closeReturnModal,
  openCancelModal,
  closeCancelModal,
} from "@/redux/slices/loginmodalSlice";

const ExchangeOrderModal = ({
  order,
  onClose = () => {},
  onSuccess = () => {},
}) => null;

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // for review & exchange only
  const [viewMode, setViewMode] = useState("list");

  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  // Redux modal state
  const {
    openReturnModal: isReturnOpen,
    cancelModal: isCancelOpen,
    selectedProduct,
  } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  // Fetch orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axiosHttp.get(`/order-history/${userId}`);
      if (response.data.status === 200) {
        setOrders(response.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
      setActiveModal("exchange");
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

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

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
      </>
    );
  }

  // Main layout
  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Orders</h1>
        <p className="text-gray-600">
          Track, return, cancel, review, or exchange your orders
        </p>
      </div>

      {/* Orders list */}
      {orders.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-600">No orders found</p>
        </div>
      ) : (
        orders.map((order) => (
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

      {/* EXCHANGE MODAL (Local state) */}
      {activeModal === "exchange" && (
        <ExchangeOrderModal
          order={selectedOrder}
          onClose={() => setActiveModal(null)}
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
