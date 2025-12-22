"use client";

import Link from "next/link";
import { X } from "lucide-react";

const MobileNavbar = ({ isOpen, onClose, menuData, getMenuHref }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[9999]
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {menuData.map((menu, index) => (
            <div key={index}>
              <Link
                href={getMenuHref(menu.title)}
                className="block py-2 font-bold"
                onClick={onClose}
              >
                {menu.title}
              </Link>

              {menu.sections.length > 0 && (
                <div className="pl-4">
                  {menu.sections.map((section) => (
                    <div key={section.id} className="mt-2">
                      <Link
                        href={`/categories?catId=${section.id}`}
                        className="text-sm font-semibold block"
                        onClick={onClose}
                      >
                        {section.heading}
                      </Link>

                      {section.items.map((item) => (
                        <Link
                          key={item.id}
                          href={`/products?subCatId=${item.id}`}
                          className="block py-1 text-sm text-gray-600"
                          onClick={onClose}
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
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[9998]" onClick={onClose} />
      )}
    </>
  );
};

export default MobileNavbar;
