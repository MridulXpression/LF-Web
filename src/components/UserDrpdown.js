"use client";
import React, { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import useLogout from "@/hooks/useLogout";
import { useSelector } from "react-redux";

const UserDropdown = ({ user }) => {
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;
  const { onLogout } = useLogout();

  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setOpen(false);
  };

  const confirmLogout = () => {
    if (userId) onLogout(userId);
    setShowLogoutModal(false);
  };

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => {
        clearTimeout(dropdownTimeout);
        isDesktop && setOpen(true);
      }}
      onMouseLeave={() => {
        if (isDesktop) {
          const timeout = setTimeout(() => setOpen(false), 200);
          setDropdownTimeout(timeout);
        }
      }}
    >
      {/* Profile Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" text-[#808080] hover:text-gray-900 cursor-pointer"
      >
        <User className="w-6 h-6 text-black" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute -right-5 -md:right-10 top-[20px] md:top-[55px] mt-2 w-56 bg-white shadow-lg border border-gray-100 z-50">
          <div className="p-4">
            {user && (
              <div className="border-b border-gray-200 pb-3 mb-3">
                <p className="font-semibold text-gray-900">{user.fullName}</p>
                <p className="text-sm text-gray-600">{user.phone}</p>
              </div>
            )}

            <div className="space-y-1">
              <Link
                href="/account/orders"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Orders
              </Link>

              <Link
                href="/wishlist-boards"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Wishlist
              </Link>

              <Link
                href="/account/addresses"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Saved Addresses
              </Link>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            <button
              onClick={handleLogoutClick}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* LOGOUT CONFIRM MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">
              Confirm Logout
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
