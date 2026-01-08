"use client";

import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openPhoneAuthModal } from "@/redux/slices/loginmodalSlice";
import { addSearch } from "@/redux/slices/searchSlice";
import { useRouter, usePathname } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";

import NavbarDropdown from "@/components/navbar/NavbarDropdown";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import NavbarSearchComponent from "@/components/homepage/NavbarSearchComponent";
import UserDropdown from "@/components/UserDrpdown";
import QuickModal from "@/components/QuickModal";

import useGetCategoriesHierarchy from "@/hooks/useCategoriesHirerarchy";
import useBlog from "@/hooks/useBlog";

// ---------- Menu Builder ----------
const getMenuData = (categories) => {
  const dynamicMenus =
    categories?.map((cat) => ({
      title: cat.name,
      sections: cat.children.map((child) => ({
        id: child.id,
        heading: child.name,
        items: child.children.map((sub) => ({
          id: sub.id,
          name: sub.name,
        })),
      })),
    })) || [];

  return [
    { title: "ALL BRANDS", sections: [] },
    ...dynamicMenus,
    { title: "BLOGS", sections: [] },
    { title: "NEWSLETTERS", sections: [] },
    { title: "TRACK ORDER", sections: [] },
  ];
};

const Navbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  const cartTotal = useSelector((state) => state.cart.totalItems);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const categoriesHierarchy = useGetCategoriesHierarchy();
  const menuData = getMenuData(categoriesHierarchy);

  // Show NEWSLETTERS only on specific routes
  const shouldShowNewsletter =
    pathname === "/" ||
    pathname === "/shop/men" ||
    pathname === "/shop/women" ||
    pathname === "/shop/accessories";

  const filteredMenuData = menuData.filter((menu) => {
    // Hide NEWSLETTERS if not on specific routes
    if (menu.title === "NEWSLETTERS" && !shouldShowNewsletter) return false;
    // Hide TRACK ORDER if user is not logged in
    if (menu.title === "TRACK ORDER" && !user) return false;
    return true;
  });

  const blogs = useBlog();
  const latestBlogs = blogs?.slice(0, 3);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [isQuickModalOpen, setIsQuickModalOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const getMenuHref = (title = "") => {
    const t = title.toLowerCase().trim();

    if (t === "all brands" || t === "allbrands" || t === "all_brands")
      return "/brands";

    if (t === "blogs") return "/blogs";

    if (t.includes("women")) return "/shop/women";

    if (t.includes("men")) return "/shop/men";

    if (t.includes("accessor")) return "/shop/accessories";

    if (t === "track order") return "/account/orders";

    if (t === "newsletters") return "#newsletters";

    return "#";
  };

  return (
    <>
      {/* HEADER */}
      <div className="fixed top-14 inset-x-0 bg-white z-40 shadow-sm">
        <div className="max-w-full mx-auto px-4 md:px-16 py-6 md:py-7 h-20 md:h-18 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setIsMobileOpen(true)}>
              <Menu />
            </button>

            <Link href="/" className="mt-[2px] md:mt-0">
              <Image
                src="/images/logo-black.svg"
                alt="Logo"
                width={100}
                height={40}
              />
            </Link>

            {/* <Link href="/" className="md:hidden border-r border-black/50 pr-4">
              <Image
                src="/images/logo-black.svg"
                alt="Logo"
                width={100}
                height={40}
              />
            </Link> */}
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6">
            {filteredMenuData.map((menu, index) => (
              <div
                key={index}
                className="relative text-sm font-clash-display font-medium text-[#0F0F0F] uppercase leading-4
             after:absolute after:left-0 after:-bottom-2
             after:h-[1.5px] after:w-full after:bg-transparent
             hover:after:bg-black
             hover:font-semibold"
                onMouseEnter={() => {
                  clearTimeout(dropdownTimeout);
                  menu.sections.length && setActiveDropdown(index);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(
                    () => setActiveDropdown(null),
                    200
                  );
                  setDropdownTimeout(timeout);
                }}
              >
                <Link href={getMenuHref(menu.title)}>{menu.title}</Link>

                {menu.sections.length > 0 && activeDropdown === index && (
                  <NavbarDropdown
                    menu={menu}
                    latestBlogs={latestBlogs}
                    onMouseEnter={() => clearTimeout(dropdownTimeout)}
                    onMouseLeave={() => {
                      const timeout = setTimeout(
                        () => setActiveDropdown(null),
                        200
                      );
                      setDropdownTimeout(timeout);
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <div className="border-r border-black/50 w-28 h-8 flex items-center justify-center ">
              <button
                onClick={() => setIsQuickModalOpen(true)}
                className="relative overflow-hidden cursor-pointer"
              >
                <Image
                  src="/images/quick.png"
                  alt="Quick"
                  width={100}
                  height={30}
                />
                <div className="absolute inset-0 shine-overlay"></div>
              </button>
            </div>
            <Search
              className="text-black"
              onClick={() => setShowSearchDropdown(true)}
            />

            <Link href="/wishlist-boards">
              <Heart className="text-black" />
            </Link>

            <Link href="/checkout/bag" className="relative">
              <ShoppingBag className="text-black" />
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">
                  {cartTotal}
                </span>
              )}
            </Link>

            {user ? (
              <UserDropdown user={user} />
            ) : (
              <User
                className="text-black"
                onClick={() => dispatch(openPhoneAuthModal("navbar"))}
              />
            )}
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <NavbarSearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isOpen={showSearchDropdown}
        setIsOpen={setShowSearchDropdown}
      />

      {/* MOBILE NAVBAR */}
      <MobileNavbar
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menuData={filteredMenuData}
        getMenuHref={getMenuHref}
      />

      <QuickModal
        isOpen={isQuickModalOpen}
        onClose={() => setIsQuickModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
