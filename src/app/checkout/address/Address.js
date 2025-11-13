"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import OrderSummary from "@/components/OrderSummary";
import AddressCard from "@/components/AddressCard";
import AddressModal from "@/components/AddressModal";
import DeleteConfirmModal from "@/components/DeleteModal";
import PaymentStatusModal from "@/components/ordersmodal/PayementConfirmationModal";
import axiosHttp from "@/utils/axioshttp";
import useGetCoupons from "@/hooks/useGetCoupons";
import Link from "next/link";
import Footer from "@/components/footer";

const CheckOutAddress = () => {
  const [products, setProducts] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [deletingAddressId, setDeletingAddressId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModalData, setPaymentModalData] = useState({});
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const getCoupons = useGetCoupons();
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;
  const router = useRouter();

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        // Check if already loaded
        if (window.Razorpay) {
          setRazorpayLoaded(true);
          resolve(true);
          return;
        }

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
          setRazorpayLoaded(true);
          resolve(true);
        };
        script.onerror = () => {
          console.error("Failed to load Razorpay script");
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchCartItems();
      fetchAddresses();
      // Load saved checkout from memory (using state instead of localStorage)
      try {
        const saved = sessionStorage.getItem(`lafetch_checkout_${userId}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.selectedAddressId)
            setSelectedAddressId(parsed.selectedAddressId);
          if (parsed.orderTotal) setOrderTotal(parsed.orderTotal);
        }
      } catch (e) {
        console.warn("Failed to load checkout state:", e);
      }
    }
  }, [userId]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await axiosHttp.get(`/cart-items/${userId}`);
      if (response.data.status === 200 && response.data.data) {
        const transformedData = response.data.data.map((item) => ({
          id: item.id,
          productId: item.productId,
          name: item.product.title,
          price: item.product_variant.price,
          quantity: 1,
        }));
        setProducts(transformedData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  const fetchAddresses = async () => {
    try {
      const response = await axiosHttp.get(`/profile/addresses/${userId}`);
      if (response.data.status === 200 && response.data.data) {
        setAddresses(response.data.data);
        // Auto-select default address
        const defaultAddress = response.data.data.find(
          (addr) => addr.isDefaultAddress
        );
        if (defaultAddress) {
          setSelectedAddressId(defaultAddress.id);
        }
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const handleAddNewAddress = () => {
    setEditingAddress(null);
    setIsAddressModalOpen(true);
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setIsAddressModalOpen(true);
  };

  const handleDeleteAddress = (addressId) => {
    setDeletingAddressId(addressId);
    setIsDeleteModalOpen(true);
  };

  const handleSaveAddress = async (formData) => {
    try {
      if (editingAddress) {
        // Update existing address
        const response = await axiosHttp.put(`/profile/address/`, {
          ...formData,
          addressId: editingAddress.id,
        });
        if (response.data.status === 200) {
          fetchAddresses();
          setIsAddressModalOpen(false);
        }
      } else {
        // Create new address
        const response = await axiosHttp.post(`/profile/address/`, formData);
        if (response.data.status === 200 || response.data.status === 201) {
          fetchAddresses();
          setIsAddressModalOpen(false);
        }
      }
    } catch (error) {
      console.error("Error saving address:", error);
      alert("Failed to save address. Please try again.");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      setDeleteLoading(true);
      const response = await axiosHttp.delete(
        `/profile/address/${deletingAddressId}`
      );
      if (response.data.status === 200) {
        fetchAddresses();
        setIsDeleteModalOpen(false);
        setDeletingAddressId(null);
        // If deleted address was selected, clear selection
        if (selectedAddressId === deletingAddressId) {
          setSelectedAddressId(null);
        }
      }
    } catch (error) {
      console.error("Error deleting address:", error);
      alert("Failed to delete address. Please try again.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    if (!selectedAddressId) {
      alert("Please select an address to proceed.");
      return;
    }

    // Check if Razorpay is loaded
    if (!razorpayLoaded || !window.Razorpay) {
      alert("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    try {
      // Step 1: Fetch latest cart items
      const cartResp = await axiosHttp.get(`/cart-items/${userId}`);
      const cartData = (cartResp.data && cartResp.data.data) || [];

      if (cartData.length === 0) {
        alert("Your cart is empty. Please add items to proceed.");
        return;
      }

      // Build items array for initiate-payment
      const items = cartData.map((item) => {
        const unitPrice = item.product_variant?.price || 0;
        const quantity = item.quantity || 1;
        return {
          productName: item.product?.title || "",
          productId: item.productId,
          variantId: item.variantId,
          quantity,
          unitPrice,
          total: +(unitPrice * quantity).toFixed(2),
          sku: item.product?.sku || "",
          hsn: item.product?.hsn || "",
        };
      });

      const total = items.reduce(
        (s, it) => s + (it.unitPrice || 0) * (it.quantity || 1),
        0
      );
      const totalMRP = cartData.reduce(
        (s, it) => s + (it.product?.mrp || it.product?.basePrice || 0),
        0
      );

      // Step 2: Call /initiate-payment API
      const initiatePayload = {
        userId: userId,
        shippingAddressId: selectedAddressId,
        items: items,
        totalMRP: +totalMRP.toFixed(2),
        total: +total.toFixed(2),
        paymentMethod: "prepaid",
      };

      console.log("Initiating payment with payload:", initiatePayload);

      const initiateResp = await axiosHttp.post(
        `/initiate-payment`,
        initiatePayload
      );

      console.log("Initiate payment response:", initiateResp.data);

      if (
        !initiateResp.data ||
        (initiateResp.data.status !== 200 && initiateResp.data.status !== 201)
      ) {
        throw new Error(
          initiateResp.data?.message || "Failed to initiate payment"
        );
      }

      const { orderId, paymentId, providerOrderId } = initiateResp.data.data;

      if (!providerOrderId) {
        throw new Error("Provider order ID not received from server");
      }

      // Step 3: Store payment details in sessionStorage
      const paymentData = {
        orderId,
        paymentId,
        providerOrderId,
        selectedAddressId,
        items,
        total,
        totalMRP,
        userId,
      };

      try {
        sessionStorage.setItem(
          `lafetch_payment_${userId}`,
          JSON.stringify(paymentData)
        );
      } catch (e) {
        console.warn("Could not persist payment data:", e);
      }

      // Step 4: Open Razorpay payment gateway
      const amountInPaise = Math.round(total * 100);

      // Verify Razorpay key is available
      const razorpayKey = process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID;

      if (!razorpayKey) {
        console.error("Razorpay key is missing!");
        alert("Payment configuration error. Please contact support.");
        return;
      }

      console.log("Opening Razorpay with amount:", amountInPaise, "paise");

      const options = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: "INR",
        name: "LaFetch",
        description: "Order Payment",
        image: "/logo.png",
        order_id: providerOrderId,
        prefill: {
          name: userInfo?.fullName || "",
          email: userInfo?.email || "",
          contact: userInfo?.phone || "",
        },
        notes: {
          address: "LaFetch order payment",
        },
        theme: { color: "#988BFF" },
        handler: async function (response) {
          console.log("Payment successful, Razorpay response:", response);

          try {
            // Validate Razorpay response
            if (!response.razorpay_payment_id) {
              throw new Error("Payment ID is missing from Razorpay response");
            }

            // Retrieve payment data from sessionStorage
            const storedData = sessionStorage.getItem(
              `lafetch_payment_${userId}`
            );
            if (!storedData) {
              throw new Error("Payment data not found in storage");
            }

            const paymentInfo = JSON.parse(storedData);

            // Step 5: Call /place-order API with payment response
            const placeOrderPayload = {
              orderId: paymentInfo.orderId,
              paymentInfo: {
                providerOrderId:
                  response.razorpay_order_id || paymentInfo.providerOrderId,
                providerPaymentId: response.razorpay_payment_id,
                providerSignature: response.razorpay_signature || "",
              },
            };

            console.log("Placing order with payload:", placeOrderPayload);

            const placeResp = await axiosHttp.post(
              `/place-order`,
              placeOrderPayload
            );

            console.log("Place order response:", placeResp.data);

            // FIXED: Changed from placeResp.response.data to placeResp.data
            if (
              placeResp.data &&
              (placeResp.data.status === 200 || placeResp.data.status === 201)
            ) {
              // Clear stored payment and checkout data
              try {
                sessionStorage.removeItem(`lafetch_payment_${userId}`);
                sessionStorage.removeItem(`lafetch_checkout_${userId}`);
              } catch (e) {
                console.warn("Could not clear storage:", e);
              }

              // Open payment confirmation modal with success
              setPaymentModalData({
                status: "success",
                transactionId: response.razorpay_payment_id,
                paymentMethod: "Razorpay",
                dateTime: new Date().toLocaleString(),
                amountPaid: paymentInfo?.total || total || 0,
              });
              setIsPaymentModalOpen(true);
            } else {
              console.error("Place order failed:", placeResp.data);
              // Open failure modal so user can retry or continue shopping
              setPaymentModalData({
                status: "failed",
                transactionId: response.razorpay_payment_id || "N/A",
                paymentMethod: "Razorpay",
                dateTime: new Date().toLocaleString(),
                amountPaid: paymentInfo?.total || total || 0,
              });
              setIsPaymentModalOpen(true);
            }
          } catch (err) {
            console.error("Error placing order after payment:", err);
            // Show failure modal if anything goes wrong while placing order
            setPaymentModalData({
              status: "failed",
              transactionId: response?.razorpay_payment_id || "N/A",
              paymentMethod: "Razorpay",
              dateTime: new Date().toLocaleString(),
              amountPaid: paymentInfo?.total || total || 0,
            });
            setIsPaymentModalOpen(true);
          }
        },
        modal: {
          ondismiss: function () {
            console.log("Payment modal closed by user");
            alert("Payment cancelled. You can try again when ready.");
          },
        },
      };

      console.log("Creating Razorpay instance with options:", {
        ...options,
        key: "***hidden***",
      });

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        // Open failure modal with available details
        setPaymentModalData({
          status: "failed",
          transactionId: response.error?.code || "N/A",
          paymentMethod: "Razorpay",
          dateTime: new Date().toLocaleString(),
          amountPaid: 0,
        });
        setIsPaymentModalOpen(true);
      });

      rzp.open();
      console.log("Razorpay modal opened");
    } catch (err) {
      console.error("Error initiating payment:", err);
      alert(
        "Could not start payment: " + (err.message || "Please try again later.")
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-lg text-black">
        Loading your cart...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center gap-2 text-sm">
          <Link href="/checkout/bag" className="text-black">
            BAG
          </Link>
          <span className="text-black">--------</span>
          <Link
            href="/checkout/address"
            className="text-black underline decoration-[#988BFF] decoration-[2px] font-bold"
          >
            ADDRESS
          </Link>
          <span className="text-black">--------</span>
          <span className="text-black">PAYMENT</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Address Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-black">
                  SELECT ADDRESS
                </h2>
                <p className="text-sm text-gray-600">
                  {addresses.length} Saved Address
                  {addresses.length !== 1 ? "es" : ""}
                </p>
              </div>
              <button
                onClick={handleAddNewAddress}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-black rounded hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-xl">+</span>
                Add New Address
              </button>
            </div>

            {/* Default Address Section */}
            {addresses.filter((addr) => addr.isDefaultAddress).length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  DEFAULT ADDRESS
                </h3>
                {addresses
                  .filter((addr) => addr.isDefaultAddress)
                  .map((address) => (
                    <AddressCard
                      key={address.id}
                      address={address}
                      isSelected={selectedAddressId === address.id}
                      onSelect={() => setSelectedAddressId(address.id)}
                      onEdit={() => handleEditAddress(address)}
                      onDelete={() => handleDeleteAddress(address.id)}
                    />
                  ))}
              </div>
            )}

            {/* Other Addresses Section */}
            {addresses.filter((addr) => !addr.isDefaultAddress).length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  OTHER ADDRESS
                </h3>
                {addresses
                  .filter((addr) => !addr.isDefaultAddress)
                  .map((address) => (
                    <AddressCard
                      key={address.id}
                      address={address}
                      isSelected={selectedAddressId === address.id}
                      onSelect={() => setSelectedAddressId(address.id)}
                      onEdit={() => handleEditAddress(address)}
                      onDelete={() => handleDeleteAddress(address.id)}
                    />
                  ))}
              </div>
            )}

            {/* No Addresses Message */}
            {addresses.length === 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">No saved addresses found</p>
                <button
                  onClick={handleAddNewAddress}
                  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Add Your First Address
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1 flex flex-col">
            <OrderSummary
              products={products}
              coupons={getCoupons}
              onAmountChange={(amount) => setOrderTotal(amount)}
            />

            {/* Proceed to Pay Button */}
            <button
              onClick={handleRazorpayPayment}
              disabled={!razorpayLoaded}
              className={`mt-6 w-full px-4 py-3 font-semibold rounded ${
                razorpayLoaded
                  ? "bg-black text-white cursor-pointer hover:bg-gray-800"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {razorpayLoaded ? "Proceed to Pay" : "Loading Payment Gateway..."}
            </button>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => {
          setIsAddressModalOpen(false);
          setEditingAddress(null);
        }}
        onSave={handleSaveAddress}
        editAddress={editingAddress}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setDeletingAddressId(null);
        }}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
      />

      {/* Payment Confirmation Modal */}
      <PaymentStatusModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        status={paymentModalData.status}
        transactionId={paymentModalData.transactionId}
        paymentMethod={paymentModalData.paymentMethod}
        dateTime={paymentModalData.dateTime}
        amountPaid={paymentModalData.amountPaid}
        onTrackOrder={() => {
          setIsPaymentModalOpen(false);
          router.push("/account/orders");
        }}
        onContinueShopping={() => {
          setIsPaymentModalOpen(false);
          router.push("/products");
        }}
      />
    </div>
  );
};

export default CheckOutAddress;
