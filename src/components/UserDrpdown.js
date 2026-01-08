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
        className="text-[#808080] hover:text-gray-900 cursor-pointer p-1"
        aria-label="User menu"
      >
        <User className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 md:right-0 top-[20px] md:top-[45px] mt-2 w-48 sm:w-56 bg-white shadow-lg border border-gray-100 z-50 rounded-md">
          <div className="p-3 md:p-4">
            {user && (
              <div className="border-b border-gray-200 pb-2 md:pb-3 mb-2 md:mb-3">
                <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
                  {user.fullName}
                </p>
                <p className="text-xs md:text-sm text-gray-600 truncate">
                  {user.phone}
                </p>
              </div>
            )}

            <div className="space-y-1">
              <Link
                href="/account/orders"
                className="block px-2 md:px-3 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setOpen(false)}
              >
                Orders
              </Link>

              <Link
                href="/wishlist-boards"
                className="block px-2 md:px-3 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setOpen(false)}
              >
                Wishlist
              </Link>

              <Link
                href="/account/addresses"
                className="block px-2 md:px-3 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setOpen(false)}
              >
                Saved Addresses
              </Link>
            </div>

            <div className="border-t border-gray-200 my-2 md:my-3"></div>

            <button
              onClick={handleLogoutClick}
              className="w-full text-left px-2 md:px-3 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50 cursor-pointer rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* LOGOUT CONFIRM MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-sm sm:max-w-md shadow-lg">
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-black">
              Confirm Logout
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer text-sm sm:text-base"
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
