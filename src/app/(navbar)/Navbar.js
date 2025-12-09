"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import PhoneAuthModal from "@/components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { openPhoneAuthModal } from "@/redux/slices/loginmodalSlice";
import { addSearch } from "@/redux/slices/searchSlice";
import { useRouter, usePathname } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import Link from "next/link";
import useCategories from "@/hooks/useCategories";
import useGetCategoriesHierarchy from "@/hooks/useCategoriesHirerarchy";
import UserDropdown from "@/components/UserDrpdown";
import NavbarSearch from "@/components/NavbarSearch";
import useGetProductBySubCategories from "@/hooks/useGetSubCategories";
import useBlog from "@/hooks/useBlog";
import QuickModal from "@/components/QuickModal";

// Generate menu data dynamically
const getMenuData = (categories) => {
  const allBrandsMenu = { title: "ALL BRANDS", sections: [] };

  const dynamicMenus =
    categories?.map((category) => ({
      title: category.name,
      sections: category.children.map((child) => ({
        id: child.id,
        heading: child.name,
        items: child.children.map((subChild) => ({
          id: subChild.id,
          name: subChild.name,
        })),
      })),
    })) || [];

  const endStaticMenus = [
    // { title: "MostPopular", sections: [] },
    { title: "BLOGS", sections: [] },
    // { title: "Track Order", sections: [] },
  ];

  return [allBrandsMenu, ...dynamicMenus, ...endStaticMenus];
};

const Navbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  const cartTotal = useSelector((state) => state.cart.totalItems);
  const recentSearches = useSelector((state) => state.search.recentSearches);

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

  const [isQuickModalOpen, setIsQuickModalOpen] = useState(false);

  const blogs = useBlog();
  const latestBlogs = blogs
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 2);

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
      dispatch(addSearch(searchQuery.trim()));
      setShowSearchDropdown(false);
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Click suggestion
  const handleSuggestionClick = (suggestion) => {
    dispatch(addSearch(suggestion));
    setSearchQuery(suggestion);
    setShowSearchDropdown(false);
    router.push(`/products?search=${encodeURIComponent(suggestion)}`);
  };

  return (
    <>
      {/* Header Container */}
      <div className=" bg-white z-50 shadow-sm">
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4 md:justify-center">
              {/* LEFT : Logo + Menu */}
              <div className="flex items-center gap-3">
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

              {/* RIGHT : Icons always visible */}
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                  className="text-[#808080]"
                >
                  <Search className="w-5 h-5" />
                </button>

                <Link href="/wishlist-boards">
                  <Heart className="w-5 h-5 text-[#808080]" />
                </Link>

                <Link href="/checkout/bag" className="relative">
                  <ShoppingBag className="w-5 h-5 text-[#808080]" />
                  {cartTotal > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                      {cartTotal}
                    </span>
                  )}
                </Link>

                {user ? (
                  <UserDropdown user={user} />
                ) : (
                  <button onClick={() => dispatch(openPhoneAuthModal())}>
                    <User className="w-5 h-5 text-[#808080]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="border-b border-gray-200 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              {/* Quick */}
              <button
                onClick={() => setIsQuickModalOpen(true)}
                className="flex items-center text-purple-600 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/quick.png"
                  alt="Quick Icon"
                  width={100}
                  height={100}
                />
              </button>

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
                        <div
                          className="
  absolute -left-5 top-full w-[700px] 
  bg-white shadow-lg border border-gray-100 z-50
  max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
"
                        >
                          <div className="p-6">
                            <div className="flex justify-between">
                              {/* Sections */}
                              <div className="flex-1 flex flex-wrap gap-x-4 gap-y-2">
                                {menu.sections.map((section, idx) => (
                                  <div key={idx}>
                                    <Link
                                      href={`/categories?categoryId=${section.id}`}
                                    >
                                      <h3 className="text-sm font-semibold text-gray-900 ">
                                        {section.heading}
                                      </h3>
                                    </Link>
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

                              {/* Latest Blog Images */}
                              <div className="flex space-x-4">
                                {latestBlogs?.map((blog) => (
                                  <Link
                                    key={blog.id}
                                    href={`/blogs/${blog.id}`}
                                    target="_blank"
                                    className="w-24 h-32 relative rounded-lg overflow-hidden"
                                  >
                                    <Image
                                      src={blog.image_url}
                                      alt={blog.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </Link>
                                ))}
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
                    className="p-2 text-[#808080] cursor-pointer"
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white   shadow-lg z-[9999] transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-black">Menu</h2>

          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {menuData.map((menu, index) => (
            <div key={index}>
              <Link
                href={getMenuHref(menu.title)}
                className="block py-2 text-black font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {menu.title}
              </Link>

              {/* Sub-menu items (if needed) */}
              {menu.sections.length > 0 && (
                <div className="pl-4">
                  {menu.sections.map((section, idx) => (
                    <div key={idx} className="mt-2">
                      <Link href={`/categories?categoryId=${section.id}`}>
                        <p className="text-sm font-semibold text-black">
                          {section.heading}
                        </p>
                      </Link>
                      {section.items.map((item) => (
                        <Link
                          key={item.id}
                          href={`/products?subCategoryId=${item.id}`}
                          className="block py-1 text-sm text-gray-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <QuickModal
        isOpen={isQuickModalOpen}
        onClose={() => setIsQuickModalOpen(false)}
      />
      <PhoneAuthModal />
    </>
  );
};

export default Navbar;
