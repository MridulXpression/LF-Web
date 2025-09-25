"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import PhoneAuthModal from "@/components/LoginModal";
import { useSelector } from "react-redux";

// Sample menu data for demonstration
const menuData = [
  {
    title: "All Brands",
    sections: [
      {
        heading: "Clothing",
        items: ["Shirts", "T-Shirts", "Jeans", "Formal Wear"],
      },
      {
        heading: "Footwear",
        items: ["Casual Shoes", "Formal Shoes", "Sneakers"],
      },
    ],
  },
  {
    title: "MasterMenu",
    sections: [
      {
        heading: "Clothing",
        items: ["Shirts", "T-Shirts", "Jeans", "Formal Wear"],
      },
      {
        heading: "Footwear",
        items: ["Casual Shoes", "Formal Shoes", "Sneakers"],
      },
    ],
  },
  {
    title: "Men",
    sections: [
      {
        heading: "Clothing",
        items: ["Shirts", "T-Shirts", "Jeans", "Formal Wear"],
      },
      {
        heading: "Footwear",
        items: ["Casual Shoes", "Formal Shoes", "Sneakers"],
      },
    ],
  },
  {
    title: "Women",
    sections: [
      {
        heading: "Clothing",
        items: ["Shirts", "T-Shirts", "Jeans", "Formal Wear"],
      },
      {
        heading: "Footwear",
        items: ["Casual Shoes", "Formal Shoes", "Sneakers"],
      },
    ],
  },
  {
    title: "Accessories",
    sections: [
      {
        heading: "Indian Wear",
        items: ["Kurta", "Nehru Jackets", "Payjamas"],
      },
      {
        heading: "Western Wear",
        items: ["Shirts", "T-Shirts", "Jeans", "Trousers"],
      },
      {
        heading: "Footwear",
        items: ["Sneakers", "Formal Shoes", "Sports Shoes"],
      },
      {
        heading: "Bags",
        items: ["Backpacks", "Handbags", "Wallets"],
      },
    ],
  },
];

const Navbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  console.log("User info from Redux:", user);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchDropdownRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Sticky Header Container */}
      <div className="sticky top-0 bg-white z-50 shadow-sm">
        {/* Top Section with Logo */}
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-center">
              {/* Hamburger Menu - Mobile Only */}
              <button
                className="md:hidden text-[#808080]"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

              <div className=" flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="LaFetch Logo"
                  width={80}
                  height={80}
                  className="mr-2 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar - Hidden on Mobile */}
        <nav className="border-b border-gray-200 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              {/* Left Section - Quick */}
              <div className="flex items-center text-purple-600">
                <Image
                  src="/images/quick.png"
                  alt="Quick Icon"
                  width={100}
                  height={100}
                />
              </div>

              {/* Center Section - Navigation Links */}
              <div className="flex items-center space-x-6">
                {menuData.map((menu, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href="#"
                      className="text-[13px] text-[#808080] hover:text-gray-900"
                    >
                      {menu.title}
                    </a>

                    {/* Unified Dropdown Style */}
                    {activeDropdown === index && (
                      <div className="absolute -left-5 top-full  w-[700px] bg-white shadow-lg border border-gray-100 z-50">
                        <div className="p-6">
                          <div className="flex justify-between">
                            {/* Menu Sections */}
                            <div className="flex-1 flex flex-wrap gap-x-8 gap-y-6">
                              {menu.sections.slice(0, 3).map((section, idx) => (
                                <div key={idx} className="flex-shrink-0">
                                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                    {section.heading}
                                  </h3>
                                  <ul className="space-y-2">
                                    {section.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <a
                                          href="#"
                                          className="text-xs text-gray-600 hover:text-gray-900"
                                        >
                                          {item}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              {menu.sections.length > 3 && (
                                <div className="w-full flex gap-x-8">
                                  {menu.sections
                                    .slice(3)
                                    .map((section, idx) => (
                                      <div
                                        key={idx + 3}
                                        className="flex-shrink-0"
                                      >
                                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                          {section.heading}
                                        </h3>
                                        <ul className="space-y-2">
                                          {section.items.map(
                                            (item, itemIdx) => (
                                              <li key={itemIdx}>
                                                <a
                                                  href="#"
                                                  className="text-xs text-gray-600 hover:text-gray-900"
                                                >
                                                  {item}
                                                </a>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>

                            {/* Product Images */}
                            <div className="ml-4 flex space-x-4">
                              <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                <span className="text-gray-400 text-xs">
                                  Product 1
                                </span>
                              </div>
                              <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                <span className="text-gray-400 text-xs">
                                  Product 2
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Additional static menu items */}
                <a
                  href="#"
                  className="text-[13px] text-[#808080] hover:text-gray-900"
                >
                  Most Popular
                </a>
                <a
                  href="#"
                  className="text-[13px] text-[#808080] hover:text-gray-900"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="text-[13px] text-[#808080] hover:text-gray-900"
                >
                  Track Order
                </a>
              </div>

              {/* Right Section - Icons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                  className="p-2 text-[#808080] hover:text-gray-900"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button className="p-2 text-[#808080] hover:text-gray-900">
                  <Heart className="w-5 h-5" />
                </button>

                <button className="p-2 text-[#808080] hover:text-gray-900">
                  <ShoppingBag className="w-5 h-5" />
                </button>

                {user ? (
                  <span className="text-black font-medium">
                    {user.fullName}
                  </span>
                ) : (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-2 text-[#808080] hover:text-gray-900 cursor-pointer"
                  >
                    <User className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold text-gray-900">LaFetch</h1>
            <button
              className="text-[#808080]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="py-4 px-4 overflow-y-auto h-full">
            {/* Quick Link */}
            <div className="flex items-center text-purple-600 mb-4">
              <span className="text-xl">⚡</span>
              <span className="ml-1 font-medium">Quick</span>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {menuData.map((menu, index) => (
                <div key={index} className="space-y-2">
                  <button
                    className="text-sm font-medium text-gray-900 w-full text-left"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    {menu.title}
                  </button>

                  {activeDropdown === index && (
                    <div className="pl-4 space-y-4">
                      {menu.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-2">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {section.heading}
                          </h3>
                          <ul className="space-y-2 pl-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a href="#" className="text-sm text-gray-600">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Additional Menu Items */}
              <a href="#" className="block text-sm text-gray-900">
                Most Popular
              </a>
              <a href="#" className="block text-sm text-gray-900">
                Blogs
              </a>
              <a href="#" className="block text-sm text-gray-900">
                Track Order
              </a>
            </div>

            {/* Mobile Icons */}
            <div className="fixed bottom-0 left-0 w-full border-t bg-white p-4">
              <div className="flex justify-around">
                <button className="p-2 text-[#808080]">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#808080]">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#808080]">
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#808080]">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}
      {showSearchDropdown && (
        <div
          ref={searchDropdownRef}
          className="sticky top-26 bg-white border-b border-gray-200 z-40"
        >
          <div className="px-4 sm:px-6 lg:px-12 py-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border-b text-black border-gray-300 rounded-lg "
              />
            </div>

            <div className="flex items-start max-w-[600px]">
              {/* Left Side - Suggestions */}
              <div className="flex-1 pr-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Suggestions
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Kurta
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Nehru jackets
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          payjamas
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wallet
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Handbag
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Shorts for men
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Images */}
              <div className="flex space-x-4">
                <div className="w-24 h-32 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Image 1</span>
                  </div>
                </div>
                <div className="w-24 h-32 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-orange-400 flex items-center justify-center">
                    <span className="text-white text-xs">Image 2</span>
                  </div>
                </div>
                <div className="w-24 h-32 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-pink-200 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Image 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <PhoneAuthModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default Navbar;
