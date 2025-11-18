"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import PhoneAuthModal from "@/components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { openPhoneAuthModal } from "@/redux/slices/loginmodalSlice";
import { useRouter, usePathname } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import Link from "next/link";
import useCategories from "@/hooks/useCategories";
import useGetCategoriesHierarchy from "@/hooks/useCategoriesHirerarchy";
import UserDropdown from "@/components/UserDrpdown";
import NavbarSearch from "@/components/NavbarSearch";
import useGetProductBySubCategories from "@/hooks/useGetSubCategories";

// Generate menu data dynamically
const getMenuData = (categories) => {
  const allBrandsMenu = { title: "All Brands", sections: [] };

  const dynamicMenus =
    categories?.map((category) => ({
      title: category.name,
      sections: category.children.map((child) => ({
        heading: child.name,
        items: child.children.map((subChild) => ({
          id: subChild.id,
          name: subChild.name,
        })),
      })),
    })) || [];

  const endStaticMenus = [
    { title: "MostPopular", sections: [] },
    { title: "Blogs", sections: [] },
    { title: "Track Order", sections: [] },
  ];

  return [allBrandsMenu, ...dynamicMenus, ...endStaticMenus];
};

const Navbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  const cartTotal = useSelector((state) => state.cart.totalItems);

  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const categoriesHierarchy = useGetCategoriesHierarchy();
  const menuData = getMenuData(categoriesHierarchy);

  const subCategoriesProducts = useGetProductBySubCategories(77);

  const getMenuHref = (title) => {
    const t = (title || "").toString().toLowerCase().trim();
    if (!t) return "#";

    if (t === "all brands" || t === "allbrands" || t === "all_brands")
      return "/brands";
    if (t === "blogs") return "/blogs";
    if (t.includes("women")) return "/shop/women";
    if (t.includes("men")) return "/shop/men";
    if (t.includes("accessor")) return "/shop/accessories";
    if (t === "track order") return "#";
    if (t === "mostpopular") return "#";
  };

  // Fetch product suggestions
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setIsLoadingSuggestions(true);

      const timer = setTimeout(async () => {
        try {
          const response = await axiosHttp.post(
            `product-suggestion?key=${encodeURIComponent(searchQuery)}`
          );
          setSuggestions(response.data.data || []);
        } catch (err) {
          setSuggestions([]);
        } finally {
          setIsLoadingSuggestions(false);
        }
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Search on Enter
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setShowSearchDropdown(false);
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Click suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSearchDropdown(false);
    router.push(`/products?search=${encodeURIComponent(suggestion)}`);
  };

  return (
    <>
      {/* Header Container */}
      <div className="sticky top-0 bg-white z-50 shadow-sm">
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-center">
              {/* Mobile Menu */}
              <button
                className="md:hidden text-[#808080]"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="LaFetch Logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="border-b border-gray-200 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              {/* Quick */}
              <div className="flex items-center text-purple-600">
                <Image
                  src="/images/quick.png"
                  alt="Quick Icon"
                  width={100}
                  height={100}
                />
              </div>

              {/* Menu Items */}
              <div className="flex items-center space-x-6">
                {menuData.map((menu, index) => {
                  const href = getMenuHref(menu.title);
                  const isActive = pathname === href;
                  const hasDropdown = menu.sections.length > 0;

                  return (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        hasDropdown && setActiveDropdown(index)
                      }
                      onMouseLeave={() =>
                        hasDropdown && setActiveDropdown(null)
                      }
                    >
                      <Link
                        href={href}
                        className={`text-[13px] pb-2 ${
                          isActive
                            ? "font-semibold text-black border-b-2 border-black"
                            : "text-[#808080] hover:text-gray-900"
                        }`}
                      >
                        {menu.title}
                      </Link>

                      {/* Dropdown Menu */}
                      {hasDropdown && activeDropdown === index && (
                        <div className="absolute -left-5 top-full w-[700px] bg-white shadow-lg border border-gray-100 z-50">
                          <div className="p-6">
                            <div className="flex justify-between">
                              {/* Sections */}
                              <div className="flex-1 flex flex-wrap gap-x-8 gap-y-6">
                                {menu.sections.map((section, idx) => (
                                  <div key={idx}>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                      {section.heading}
                                    </h3>
                                    <ul className="space-y-2">
                                      {section.items.map((item, i) => (
                                        <li key={i}>
                                          <Link
                                            href={`/products?subCategoryId=${item.id}`}
                                            className="text-xs text-gray-600 hover:text-gray-900"
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>

                              {/* Images */}
                              <div className="flex space-x-4">
                                <div className="w-24 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <span className="text-xs text-gray-400">
                                    Product 1
                                  </span>
                                </div>
                                <div className="w-24 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <span className="text-xs text-gray-400">
                                    Product 2
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Icons */}
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
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                      {cartTotal}
                    </span>
                  )}
                </Link>

                {user ? (
                  <UserDropdown user={user} />
                ) : (
                  <button
                    onClick={() => dispatch(openPhoneAuthModal())}
                    className="p-2 text-[#808080]"
                  >
                    <User className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Search Component (Separated) */}
      {showSearchDropdown && (
        <NavbarSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          suggestions={suggestions}
          isLoadingSuggestions={isLoadingSuggestions}
          handleSearch={handleSearch}
          handleSuggestionClick={handleSuggestionClick}
          setShowSearchDropdown={setShowSearchDropdown}
        />
      )}

      <PhoneAuthModal />
    </>
  );
};

export default Navbar;
