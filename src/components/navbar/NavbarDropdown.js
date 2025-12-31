"use client";

import Link from "next/link";
import Image from "next/image";

const NavbarDropdown = ({ menu, latestBlogs, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="fixed left-0 right-0 top-36 z-40 max-h-[90vh] overflow-y-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-[#F8F8F8] shadow-lg border-t border-gray-200">
        <div className="max-w-full mx-auto px-16 ">
          <div className="grid grid-cols-[1fr_420px] gap-8 items-start">
            {/* Left Side - Categories Grid */}
            <div className="flex-1 grid grid-cols-4 gap-x-5 ">
              {menu.sections.map((section, index) => (
                <div
                  key={section.id}
                  className={
                    index % 2 === 0 ? "bg-[#F2F2F2] p-4 " : "bg-[#F8F8F8] p-4 "
                  }
                >
                  <a href={`/categories?catId=${section.id}`}>
                    <h3 className="text-[10px] font-[600] text-[#0F0F0F] mb-1  font-clash-display uppercase">
                      {section.heading}
                    </h3>
                  </a>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`/products?subCatId=${item.id}`}
                          className="text-[10px] font-normal text-[#404040] hover:text-black transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Side - Image Gallery */}
            {latestBlogs?.length > 0 && (
              <div className="w-[420px] flex-shrink-0 max-h-[550px]">
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                  {/* Large Image - Top Row Spanning 2 Columns */}
                  {latestBlogs[0] && (
                    <Link
                      href={`/blogs/${latestBlogs[0].id}`}
                      target="_blank"
                      className="col-span-2 row-span-1 relative rounded-lg overflow-hidden h-[240px]"
                    >
                      <Image
                        src={latestBlogs[0].image_url}
                        alt={latestBlogs[0].title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}

                  {/* Small Image - Bottom Left */}
                  {latestBlogs[1] && (
                    <Link
                      href={`/blogs/${latestBlogs[1].id}`}
                      target="_blank"
                      className="relative rounded-lg overflow-hidden h-[200px]"
                    >
                      <Image
                        src={latestBlogs[1].image_url}
                        alt={latestBlogs[1].title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}

                  {/* Small Image - Bottom Right */}
                  {latestBlogs[2] && (
                    <Link
                      href={`/blogs/${latestBlogs[2].id}`}
                      target="_blank"
                      className="relative rounded-lg overflow-hidden h-[200px]"
                    >
                      <Image
                        src={latestBlogs[2].image_url}
                        alt={latestBlogs[2].title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;
