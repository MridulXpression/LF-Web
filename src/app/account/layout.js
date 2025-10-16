"use client";
import AccountHeader from "@/components/accounts/AccountHeader";
import AccountSidebar from "@/components/accounts/AccountSidebar";
import Navbar from "../(navbar)/Navbar";

export default function AccountLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar container with full width */}
      <div className="w-full bg-white">
        <Navbar />
      </div>

      {/* Content container with max-width */}
      <div className="max-w-[1400px] mx-auto">
        <AccountHeader />
        <div className="flex">
          <AccountSidebar />
          <div className="flex-1 bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
