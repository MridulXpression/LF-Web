import React from "react";
import { User } from "lucide-react";
import Link from "next/link";

const UserDropdown = ({ user, onLogout }) => {
  return (
    <div className="relative group">
      {/* User Icon */}
      <button className="p-2 text-[#808080] hover:text-gray-900 cursor-pointer">
        <User className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-4">
          {/* User Info */}
          {user && (
            <div className="border-b border-gray-200 pb-3 mb-3">
              <p className="font-semibold text-gray-900">{user.fullName}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
            </div>
          )}

          {/* Menu Items */}
          <div className="space-y-1">
            <Link
              href="/account/orders"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50  "
            >
              Orders
            </Link>
            <Link
              href="/wishlist-boards"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50  "
            >
              Wishlist
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50  "
            >
              Contact Us
            </Link>
            <Link
              href="/account/addresses"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50  "
            >
              Saved Addresses
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-3"></div>

          {/* Profile Actions */}
          <div className="space-y-1">
            <Link
              href="/profile/edit"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50  "
            >
              Edit Profile
            </Link>
            <button
              onClick={onLogout}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50  "
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
