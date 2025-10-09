"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ title, backgroundImage, href }) => {
  return (
    <Link href={href}>
      <div className="relative group overflow-hidden cursor-pointer h-[400px] md:h-[656px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Overlay for better visibility */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-3xl font-light tracking-wider pb-[20px] md:pb-[0]">
              <span className="group-hover:underline transition-all duration-300">
                {title}
              </span>
            </h3>

            {/* Arrow appears on hover */}
            <ArrowRight className="text-white w-6 h-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
