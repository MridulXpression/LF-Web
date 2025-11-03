"use client";
import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import EditProfileModal from "./EditProfileModal";
import axiosHttp from "@/utils/axioshttp";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

const AccountHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // get current user state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  // ✅ Fetch user data
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const res = await axiosHttp.get(`/profile/user-profile/${userId}`);

      // Response format:
      // { status: 200, message: "Success!", data: { id, fullName, email, gender, phone } }

      const { data } = res.data;
      const [firstName, ...lastNameParts] = data.fullName.split(" ");
      const lastName = lastNameParts.join(" ");

      setUserData({
        id: data.id,
        firstName,
        lastName,
        email: data.email,
        gender: data.gender ? data.gender.toLowerCase() : "",
        phone: data.phone,
      });
    } catch (error) {
      console.error("❌ Error fetching user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch once on mount
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEditClick = () => setIsModalOpen(true);

  // ✅ Save updated profile
  const handleSaveProfile = async (updatedData) => {
    try {
      const payload = {
        fullName: `${updatedData.firstName} ${updatedData.lastName}`,
        email: updatedData.email,
        gender: updatedData.gender,
        phone: userData?.phone,
      };

      await axiosHttp.put(`/auth/update-user-profile`, payload);
      const data = {
        fullName: payload?.fullName,
        email: payload?.email,
      };

      dispatch(
        setUser({
          id: user.userInfo.id,
          fullName: data.fullName,
          email: data.email,
          phone: user.userInfo.phone,
          role: user.userInfo.role,
          token: user.token,
          refreshToken: user.refreshToken,
        })
      );
      await fetchUserData(); // re-fetch to refresh data
    } catch (error) {
      console.error("❌ Error updating profile:", error);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            {loading || !userData ? (
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-64"></div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-semibold text-gray-900">
                    {userData.firstName?.toUpperCase()}{" "}
                    {userData.lastName?.toUpperCase()}
                  </h1>
                  {userData.gender && (
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {userData.gender}
                    </span>
                  )}
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mt-1">
                  <span>{userData.phone}</span>
                  <span>{userData.email}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleEditClick}
          disabled={loading}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-60"
        >
          <span className="text-sm">✏️</span>
          <span className="text-black">Edit Profile</span>
        </button>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userData={userData}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default AccountHeader;
