"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OrderSummary from "@/components/OrderSummary";
import AddressCard from "@/components/AddressCard";
import AddressModal from "@/components/AddressModal";
import DeleteConfirmModal from "@/components/DeleteModal";
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

  const getCoupons = useGetCoupons();
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  useEffect(() => {
    if (userId) {
      fetchCartItems();
      fetchAddresses();
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

  const handleRazorpayPayment = () => {
    if (!selectedAddressId) {
      alert("Please select an address to proceed.");
      return;
    }
    const amountInPaise = orderTotal * 100;
    console.log("Initiating payment of:", amountInPaise);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID,
      amount: amountInPaise, // amount in paise (₹500)
      currency: "INR",
      name: "LaFetch",
      description: "Demo Transaction",
      image: "/logo.png", // optional
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
        console.log("Payment Success:", response);
      },
      prefill: {
        name: userInfo?.fullName,
        email: userInfo?.email,
        contact: userInfo?.phone,
      },
      notes: {
        address: "Test Transaction - No backend",
      },
      theme: {
        color: "#988BFF",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
              className="mt-6 w-full px-4 py-3 bg-black text-white font-semibold rounded cursor-pointer"
            >
              Proceed to Pay
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
    </div>
  );
};

export default CheckOutAddress;
