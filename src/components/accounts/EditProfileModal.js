"use client";
import React, { useState, useEffect } from "react";
import { X, Edit2 } from "lucide-react";
import toast from "react-hot-toast";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useSelector } from "react-redux";

const EditProfileModal = ({ isOpen, onClose, userData, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(userData || {});
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
  const [originalPhone, setOriginalPhone] = useState(userData?.phone || "");
  const [phoneOtp, setPhoneOtp] = useState(["", "", "", ""]);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [otpLoading, setOtpLoading] = useState(false);

  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  useEffect(() => {
    if (userData) {
      setFormData(userData);
      setOriginalPhone(userData.phone);
    }
  }, [userData]);

  // Countdown timer effect
  useEffect(() => {
    let interval;
    if (resendCountdown > 0) {
      interval = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendCountdown]);

  const handlePhoneEdit = () => {
    setIsPhoneEditing(true);
    // Focus the phone input after a brief delay to ensure it's enabled
    setTimeout(() => {
      const phoneInput = document.querySelector('input[name="phone"]');
      if (phoneInput) {
        phoneInput.focus();
        phoneInput.select();
      }
    }, 50);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: value.length > 0 ? `+91${value}` : "",
      }));
    }
  };

  const getPhoneWithoutPrefix = (phone) => {
    if (!phone) return "";
    return phone.replace("+91", "");
  };

  const isPhoneChanged = () => {
    return formData.phone !== originalPhone;
  };

  const isPhoneValid = () => {
    const phoneDigits = getPhoneWithoutPrefix(formData.phone);
    return phoneDigits.length === 10;
  };

  const handleSendOtp = async () => {
    if (!isPhoneValid()) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setOtpLoading(true);
    try {
      const response = await axiosHttp.post(endPoints.resendOtp, {
        phone: formData.phone,
        type: "updateProfile",
        userId: userId,
      });

      if (response.status === 200) {
        setOtpSent(true);
        setShowOtpInput(true);
        setResendCountdown(60);
        toast.success("OTP sent successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...phoneOtp];
    newOtp[index] = value;
    setPhoneOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`phone-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = phoneOtp.join("");
    if (otpString.length !== 4) {
      toast.error("Please enter complete OTP");
      return;
    }

    setOtpLoading(true);
    try {
      const response = await axiosHttp.post(endPoints.verifyOtp, {
        phone: formData.phone,
        otp: otpString,
        type: "updateProfile",
        userId: userId,
      });

      if (response.data?.status === 200) {
        toast.success("Phone number verified successfully!");
        setShowOtpInput(false);
        setOtpSent(false);
        setIsPhoneEditing(false);
        setOriginalPhone(formData.phone);
        setPhoneOtp(["", "", "", ""]);

        // Refresh profile data
        await fetchUserProfile();
      } else {
        toast.error(response.data?.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleCancelPhoneEdit = () => {
    setIsPhoneEditing(false);
    setShowOtpInput(false);
    setOtpSent(false);
    setPhoneOtp(["", "", "", ""]);
    setFormData((prev) => ({
      ...prev,
      phone: originalPhone,
    }));
  };

  const handleResendOtp = async () => {
    if (resendCountdown > 0) return;

    setOtpLoading(true);
    try {
      const response = await axiosHttp.post(endPoints.resendOtp, {
        phone: formData.phone,
        type: "updateProfile",
        userId: userId,
      });

      if (response.status === 200) {
        setResendCountdown(60);
        toast.success("OTP resent successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const res = await axiosHttp.get(`/profile/user-profile/${userId}`);
      const { data } = res.data;
      const [firstName, ...lastNameParts] = data.fullName.split(" ");
      const lastName = lastNameParts.join(" ");
      const updatedUserData = {
        id: data.id,
        firstName,
        lastName,
        email: data.email,
        gender: data.gender ? data.gender.toLowerCase() : "",
        phone: data.phone,
      };
      setFormData(updatedUserData);
      setOriginalPhone(data.phone);
    } catch (error) {}
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (gender) => {
    setFormData((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleClose = () => {
    // Reset all editing states when modal closes
    setIsPhoneEditing(false);
    setShowOtpInput(false);
    setOtpSent(false);
    setPhoneOtp(["", "", "", ""]);
    setResendCountdown(0);
    setFormData(userData || {});
    setOriginalPhone(userData?.phone || "");
    onClose();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSave(formData);
      toast.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded shadow-xl flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        {/* Header */}
        <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-shrink-0">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            EDIT PROFILE
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          ) : (
            <div>
              {/* First Name */}
              <div className="mb-4">
                <label className="block text-sm  text-black mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleInputChange}
                  disabled={isPhoneEditing}
                  className={`w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black outline-none text-black transition-all ${
                    isPhoneEditing
                      ? "opacity-40 bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label className="block text-sm  text-black mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                  disabled={isPhoneEditing}
                  className={`w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black outline-none text-black transition-all ${
                    isPhoneEditing
                      ? "opacity-40 bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>

              {/* Phone with Edit functionality */}
              <div className="mb-4">
                <label className="block text-sm text-black mb-2">Phone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={getPhoneWithoutPrefix(formData.phone)}
                    onChange={handlePhoneChange}
                    disabled={!isPhoneEditing || otpSent}
                    className={`w-full px-3 py-2 border rounded outline-none transition-all ${
                      isPhoneEditing && !otpSent
                        ? "border-black ring-2 ring-black bg-white text-black"
                        : "border-gray-300 bg-white text-black opacity-40 cursor-not-allowed"
                    } focus:ring-2 focus:ring-black`}
                    placeholder="1234567890"
                  />
                  {!isPhoneEditing && (
                    <button
                      onClick={handlePhoneEdit}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black cursor-pointer"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  )}
                  {isPhoneEditing && !otpSent && (
                    <button
                      onClick={handleSendOtp}
                      disabled={
                        otpLoading || !isPhoneChanged() || !isPhoneValid()
                      }
                      className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium transition-all ${
                        otpLoading || !isPhoneChanged() || !isPhoneValid()
                          ? "text-gray-400 cursor-not-allowed opacity-50"
                          : "text-[#9c90ff] hover:underline cursor-pointer"
                      }`}
                    >
                      {otpLoading ? "Sending..." : "Send OTP"}
                    </button>
                  )}
                </div>

                {isPhoneEditing && (
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={handleCancelPhoneEdit}
                      className="text-sm text-gray-500 hover:text-gray-700 hover:underline cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {showOtpInput && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-600">
                      Enter the 4-digit OTP sent to {formData.phone}
                    </p>
                    <div className="flex justify-start space-x-2">
                      {phoneOtp.map((digit, index) => (
                        <input
                          key={index}
                          id={`phone-otp-${index}`}
                          type="text"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (
                              e.key === "Backspace" &&
                              !phoneOtp[index] &&
                              index > 0
                            ) {
                              const prevInput = document.getElementById(
                                `phone-otp-${index - 1}`,
                              );
                              if (prevInput) prevInput.focus();
                            }
                          }}
                          className="w-10 h-10 text-center text-lg font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-black"
                          maxLength="1"
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handleVerifyOtp}
                        disabled={otpLoading || phoneOtp.join("").length !== 4}
                        className="text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {otpLoading ? "Verifying..." : "Verify OTP"}
                      </button>
                      <button
                        onClick={handleResendOtp}
                        disabled={otpLoading || resendCountdown > 0}
                        className={`text-sm ${
                          resendCountdown > 0
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-[#9c90ff] hover:underline cursor-pointer"
                        } disabled:opacity-50`}
                      >
                        {resendCountdown > 0
                          ? `Resend in ${resendCountdown}s`
                          : "Resend OTP"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm  text-black mb-2">Email </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  disabled={isPhoneEditing}
                  className={`w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black outline-none text-black transition-all ${
                    isPhoneEditing
                      ? "opacity-40 bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                />
                <span className="text-[#9c90ff] text-xs">
                  You will receive updates at the email address listed above.
                </span>
              </div>

              {/* Gender */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Gender
                </label>
                <div
                  className={`flex gap-6 transition-all ${
                    isPhoneEditing ? "opacity-40" : ""
                  }`}
                >
                  {["male", "female", "other"].map((gender) => (
                    <label
                      key={gender}
                      className={`flex items-center gap-2 ${
                        isPhoneEditing ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={() => handleGenderChange(gender)}
                        disabled={isPhoneEditing}
                        className="w-4 h-4 text-black"
                      />
                      <span className="text-sm  text-black capitalize">
                        {gender}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleClose}
                  disabled={isPhoneEditing}
                  className={`flex-1 px-4 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-black cursor-pointer ${
                    isPhoneEditing ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading || isPhoneEditing}
                  className={`flex-1 px-4 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer ${
                    isPhoneEditing ? "cursor-not-allowed" : ""
                  }`}
                >
                  Save Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
