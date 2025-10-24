"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import PhoneAuthModal from "@/components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { openPhoneAuthModal } from "@/redux/slices/loginmodalSlice";
import { useRouter } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import Link from "next/link";
import useCategories from "@/hooks/useCategories";
import UserDropdown from "@/components/UserDrpdown";
import { usePathname } from "next/navigation";

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
  const cartTotal = useSelector((state) => state.cart.totalItems);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const searchDropdownRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const query = "type=category&gender=1";
  const useCategory = useCategories(query);

  const subquery = "type=sub";
  const useSubCategories = useCategories(subquery);

  // Fetch suggestions as user types
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setIsLoadingSuggestions(true);
      const debounceTimer = setTimeout(async () => {
        try {
          const response = await axiosHttp.post(
            `product-suggestion?key=${encodeURIComponent(searchQuery)}`
          );
          setSuggestions(response.data.data || []);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        } finally {
          setIsLoadingSuggestions(false);
        }
      }, 300); // Debounce delay

      return () => clearTimeout(debounceTimer);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Handle search on Enter key
  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setShowSearchDropdown(false);
      // Navigate to shop page with search query
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSearchDropdown(false);
    router.push(`/products?search=${encodeURIComponent(suggestion)}`);
  };

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

              <Link href="/" className=" flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="LaFetch Logo"
                  width={80}
                  height={80}
                  className="mr-2 h-auto"
                />
              </Link>
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
                    <Link
                      href={
                        menu.title === "All Brands"
                          ? "/brands"
                          : menu.title === "Men"
                          ? "/shop/men"
                          : menu.title === "Women"
                          ? "/shop/women"
                          : menu.title === "Accessories"
                          ? "/shop/accessories"
                          : menu.title === "Blogs"
                          ? "/blogs"
                          : "#"
                      }
                      className={`text-[13px] pb-2 ${
                        pathname === "/brands" && menu.title === "All Brands"
                          ? "font-semibold text-black border-b-2 border-black"
                          : pathname === "/shop/men" && menu.title === "Men"
                          ? "font-semibold text-black border-b-2 border-black"
                          : pathname === "/shop/women" && menu.title === "Women"
                          ? "font-semibold text-black border-b-2 border-black"
                          : pathname === "/shop/accessories" &&
                            menu.title === "Accessories"
                          ? "font-semibold text-black border-b-2 border-black"
                          : pathname === "/blogs" && menu.title === "Blogs"
                          ? "font-semibold text-black border-b-2 border-black"
                          : "text-[#808080] hover:text-gray-900"
                      }`}
                    >
                      {menu.title}
                    </Link>

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
                <Link
                  href="/blogs"
                  className="text-[13px] text-[#808080] hover:text-gray-900"
                >
                  Blogs
                </Link>
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
                  className="p-2 text-[#808080] hover:text-gray-900 cursor-pointer"
                >
                  <Search className="w-5 h-5" />
                </button>

                <Link
                  href="/wishlist-boards"
                  className="p-2 text-[#808080] hover:text-gray-900 cursor-pointer"
                >
                  <Heart className="w-5 h-5" />
                </Link>

                <Link
                  href="/checkout/bag"
                  className="relative p-2 text-[#808080] hover:text-gray-900 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {cartTotal > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                      {cartTotal}
                    </span>
                  )}
                </Link>

                {user ? (
                  <UserDropdown user={user} />
                ) : (
                  <button
                    onClick={() => dispatch(openPhoneAuthModal())}
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
                <Link
                  href="/wishlist-boards"
                  className="p-2 text-[#808080] hover:text-gray-900 cursor-pointer"
                >
                  <Heart className="w-5 h-5" />
                </Link>

                <Link
                  href="/checkout/bag"
                  className="p-2 text-[#808080] hover:text-gray-900 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                </Link>
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
          className="absolute left-0 top-24 w-screen max-w-[100vw] bg-white border border-gray-200 shadow-lg z-40"
        >
          <div className="px-4 sm:px-6 lg:px-12 py-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search products... (Press Enter to search)"
                className="w-full pl-10 pr-4 py-3 border-b text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                autoFocus
              />
            </div>

            <div className="flex items-start max-w-[600px]">
              {/* Left Side - Suggestions */}
              <div className="flex-1 pr-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {isLoadingSuggestions
                    ? "Loading..."
                    : suggestions.length > 0
                    ? "Suggestions"
                    : "Searches"}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {suggestions.length > 0
                    ? suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-gray-600 hover:text-gray-900 text-left hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))
                    : !isLoadingSuggestions &&
                      suggestions.length === 0 && (
                        <p className="text-gray-500 text-sm">
                          No suggestions found
                        </p>
                      )}
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
      <PhoneAuthModal />
    </>
  );
};

export default Navbar;
