"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Package,
  Headphones,
  MapPin,
  Info,
  FileText,
  Shield,
  XCircle,
  Truck,
  Menu,
  X,
} from "lucide-react";
import DeleteAccountModal from "./DeleteAccountModal";

const AccountSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const menuItems = [
    { id: "orders", label: "My Orders", icon: Package, section: "account" },
    // {
    //   id: "care",
    //   label: "Customer Care",
    //   icon: Headphones,
    //   section: "account",
    // },
    {
      id: "addresses",
      label: "Saved Addresses",
      icon: MapPin,
      section: "account",
    },
    { id: "about", label: "About Us", icon: Info, section: "support" },
    {
      id: "terms",
      label: "Terms & Conditions",
      icon: FileText,
      section: "support",
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: Shield,
      section: "support",
    },
    {
      id: "cancellations",
      label: "Cancellations Policy",
      icon: XCircle,
      section: "support",
    },
    {
      id: "shipping",
      label: "Shipping Policy",
      icon: Truck,
      section: "support",
    },
  ];

  const externalUrls = {
    about: "/about-us",
    terms: "/terms-and-conditions",
    privacy: "/privacy-policy",
    cancellations: "/cancellation-policy",
    shipping: "/shipping-policy",
  };

  const handleNavigation = (id) => {
    if (externalUrls[id]) {
      window.open(externalUrls[id], "_blank");
    } else {
      router.push(`/account/${id}`);
    }
    setIsMobileSidebarOpen(false); // auto-close sidebar on navigation (mobile)
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-72 bg-gray-50 border-r border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">
            My Account
          </h2>
          {menuItems
            .filter((item) => item.section === "account")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 mb-1 transition-colors cursor-pointer ${
                  pathname.includes(item.id)
                    ? "bg-white text-gray-900 font-medium border-r-[2px] border-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Support</h2>
          {menuItems
            .filter((item) => item.section === "support")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 mb-1 transition-colors cursor-pointer ${
                  pathname.includes(item.id)
                    ? "bg-white text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
        </div>

        <div className="mt-8 space-y-2">
          <button
            onClick={() => setShowDeleteModal(true)}
            className="w-full px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-5 z-50 transform transition-transform duration-300 md:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-800">My Account</h2>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="p-1 text-gray-600 hover:text-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">
            My Account
          </h2>
          {menuItems
            .filter((item) => item.section === "account")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 mb-1 rounded transition-colors ${
                  pathname.includes(item.id)
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Support</h2>
          {menuItems
            .filter((item) => item.section === "support")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 mb-1 rounded transition-colors ${
                  pathname.includes(item.id)
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
        </div>

        <button
          onClick={() => setShowDeleteModal(true)}
          className="w-full mt-4 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 transition-colors rounded"
        >
          Delete Account
        </button>
      </div>

      {/* Floating Toggle Button (Mobile only) */}
      <button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="fixed bottom-5 left-5 bg-black text-white rounded-full p-3 shadow-lg z-50 md:hidden hover:bg-gray-800 transition"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Delete Account Modal */}
      <DeleteAccountModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default AccountSidebar;
