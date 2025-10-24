"use client";
import React from "react";
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
} from "lucide-react";

const AccountSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: "orders", label: "My Orders", icon: Package, section: "account" },
    {
      id: "care",
      label: "Customer Care",
      icon: Headphones,
      section: "account",
    },
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

  const handleNavigation = (id) => {
    router.push(`/account/${id}`);
  };

  return (
    <div className="w-72 bg-gray-50 border-r border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-3">My Account</h2>
        {menuItems
          .filter((item) => item.section === "account")
          .map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2   mb-1 transition-colors cursor-pointer ${
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
              className={`w-full flex items-center gap-3 px-3 py-2   mb-1 transition-colors cursor-pointer ${
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
        <button className="w-full px-4 py-2 bg-red-50 text-red-600   hover:bg-red-100 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;
