"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FashionGrid = ({ data, title = "TRENDING NOW" }) => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [hoveredButtonId, setHoveredButtonId] = useState(null);
  // Helper function to get container classes based on size
  const getContainerClasses = (size) => {
    const baseClasses = "relative overflow-hidden group ";

    switch (size) {
      case "large": // 720x519
        return `w-full md:w-[720px] h-[300px] md:h-[519px] ${baseClasses}`;
      case "medium": // 440x519
        return `w-full md:w-[440px] h-[300px] md:h-[519px] ${baseClasses}`;
      case "small": // 350x550
        return `w-full md:w-[350px] h-[300px] md:h-[550px] ${baseClasses}`;
      case "extra-large": // 800x550
        return `w-full md:w-[800px] h-[300px] md:h-[550px] ${baseClasses}`;
      case "medium-large": // 450x550
        return `w-full md:w-[450px] h-[300px] md:h-[550px] ${baseClasses}`;
      default:
        return `w-full md:w-[440px] h-[300px] md:h-[519px] ${baseClasses}`;
    }
  };

  // Helper function to get text position classes
  const getTextPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "absolute top-8 left-8 w-full text-white";
      case "bottom-left":
        return "absolute bottom-6 left-6 w-full  text-white";
      case "center-left":
        return "absolute top-[20%] left-8 transform -translate-y-1/2 text-white max-w-md";
      default:
        return "absolute bottom-6 left-6 text-white";
    }
  };

  // Helper function to get title classes
  const getTitleClasses = (size, titleColor = "text-white") => {
    const baseClasses =
      "font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent";
    const colorClass = titleColor || "text-white";

    switch (size) {
      case "large":
        return `text-xl md:text-3xl ${baseClasses}`;
      case "extra-large":
        return `text-xl md:text-4xl ${baseClasses}`;
      default:
        return `text-lg md:text-2xl ${baseClasses}`;
    }
  };

  // Helper function to get description classes
  const getDescriptionClasses = (textColor = "text-white") => {
    const colorClass = textColor || "text-white";
    return `text-xs md:text-sm opacity-90 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent`;
  };

  // Helper function to get dimensions for each item
  const getDimensions = (size) => {
    switch (size) {
      case "large": // First row, first column
        return { width: 720, height: 519 };
      case "medium": // First row, second & third columns
        return { width: 440, height: 519 };
      case "small": // Second row, first column
        return { width: 350, height: 550 };
      case "extra-large": // Second row, second column
        return { width: 800, height: 550 };
      case "medium-large": // Second row, third column
        return { width: 450, height: 550 };
      default:
        return { width: 440, height: 519 };
    }
  };

  // Fixed sizes for each position - no need to rely on data.size
  const fixedSizes = [
    // First Row
    { size: "large", width: 720, height: 519 }, // Position 1
    { size: "medium", width: 440, height: 519 }, // Position 2
    { size: "medium", width: 440, height: 519 }, // Position 3
    // Second Row
    { size: "small", width: 350, height: 550 }, // Position 4
    { size: "extra-large", width: 800, height: 550 }, // Position 5
    { size: "medium-large", width: 450, height: 550 }, // Position 6
  ];

  // Split items for two rows layout
  const firstRowItems = data.slice(0, 3);
  const secondRowItems = data.slice(3, 6);

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="md:max-w-[1400px] mx-auto">
        <div className="flex items-center mb-[40px] gap-8">
          <div className="flex-1 h-[2px] bg-stone-950" />
          <div className="text-stone-950 text-2xl  md:text-[38px] font-semibold uppercase tracking-wider whitespace-nowrap">
            {title}
          </div>
        </div>
      </div>

      {/* First Row */}
      <div className="flex flex-col md:flex-row max-w-full">
        {firstRowItems.map((item, index) => {
          const fixedSize = fixedSizes[index];
          let position = item.position || "bottom-left";
          let titleColor = item.titleColor;
          let textColor = item.textColor;
          const isHovered = hoveredCardId === `first-${index}`;

          // Row 1, Item 1: text at top
          if (index === 0) {
            position = "top-left";
          }
          // Row 1, Item 2 & 3: text at bottom (default)

          return (
            <div
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
              className={getContainerClasses(fixedSize.size)}
              onMouseEnter={() => setHoveredCardId(`first-${index}`)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {/* Image (bottom) */}
              <Image
                src={item.image}
                alt={item.title}
                width={fixedSize.width}
                height={fixedSize.height}
                className="w-full h-full object-cover z-0"
              />

              {/* Overlay (middle) */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              />

              {/* Text (top/middle position) - moves up on hover if at bottom */}
              <div
                className={`${getTextPositionClasses(
                  position
                )} z-20 transition-all duration-300 ${
                  position === "bottom-left" && isHovered ? "bottom-32" : ""
                }`}
              >
                <h2 className={getTitleClasses(fixedSize.size)}>
                  {item.title}
                </h2>
                <p className={getDescriptionClasses()}>{item.description}</p>
              </div>

              {/* CTA Button (bottom only on hover) */}
              {isHovered && (
                <Link href={`/blogs/${item.id}`}>
                  <div
                    className="absolute bottom-6 left-6 z-20 transition-all duration-300"
                    onMouseEnter={() => setHoveredButtonId(`first-${index}`)}
                    onMouseLeave={() => setHoveredButtonId(null)}
                  >
                    <div
                      className={`w-50 px-8 py-4 rounded-[46px] outline outline-2 outline-offset-[-2px] inline-flex justify-between items-center transition-colors duration-300 ${
                        hoveredButtonId === `first-${index}`
                          ? "bg-black outline-white"
                          : "outline-black"
                      }`}
                    >
                      <div
                        className={`justify-start text-[16px] font-semibold font-['Clash_Display'] uppercase transition-colors duration-300 ${
                          hoveredButtonId === `first-${index}`
                            ? "text-white"
                            : "text-white"
                        }`}
                      >
                        Read more
                      </div>
                      <div className="w-8 h-8 p-1.5 rounded-[20px] flex justify-start items-center gap-1.5">
                        <ArrowRight
                          className={`rotate-[-45deg] transition-colors duration-300 ${
                            hoveredButtonId === `first-${index}`
                              ? "text-white"
                              : "text-black"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row max-w-full">
        {secondRowItems.map((item, index) => {
          const fixedSize = fixedSizes[index + 3];
          let position = item.position || "bottom-left";
          let titleColor = item.titleColor;
          let textColor = item.textColor;
          const isHovered = hoveredCardId === `second-${index}`;

          // Item 4: text at bottom (default)
          // Item 5: text at top with red title
          if (index === 1) {
            position = "top-left";
            titleColor = "text-[#773726]";
            textColor = "text-[#0F0F0F]";
          }
          // Item 6: text at bottom (default)

          return (
            <Link
              key={item.id}
              href={`/blogs/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={getContainerClasses(fixedSize.size)}
              onMouseEnter={() => setHoveredCardId(`second-${index}`)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={fixedSize.width}
                height={fixedSize.height}
                className="w-full h-full object-fill group-hover:scale-120 transition-transform duration-300"
              />
              <div
                className={`${getTextPositionClasses(
                  position
                )} z-20 transition-all duration-300 ${
                  position === "bottom-left" && isHovered ? "bottom-32" : ""
                }`}
              >
                <h2 className={getTitleClasses(fixedSize.size, titleColor)}>
                  {item.title}
                </h2>
                <p className={getDescriptionClasses(textColor)}>
                  {item.description || "hshdihiceidiiiicjsidje idijiweodoei "}
                </p>
              </div>

              {/* Button positioned at bottom only on hover */}
              {isHovered && (
                <Link href={`/blogs/${item.id}`}>
                  <div
                    className="absolute bottom-6 left-6 z-20 transition-all duration-300"
                    onMouseEnter={() => setHoveredButtonId(`second-${index}`)}
                    onMouseLeave={() => setHoveredButtonId(null)}
                  >
                    <div
                      className={`w-50 px-8 py-4 rounded-[46px] outline outline-2 outline-offset-[-2px] inline-flex justify-between items-center transition-colors duration-300 ${
                        hoveredButtonId === `second-${index}`
                          ? "bg-black outline-white"
                          : "outline-black"
                      }`}
                    >
                      <div
                        className={`justify-start text-[16px] font-semibold font-['Clash_Display'] uppercase transition-colors duration-300 ${
                          hoveredButtonId === `second-${index}`
                            ? "text-white"
                            : "text-white"
                        }`}
                      >
                        Read more
                      </div>
                      <div className="w-8 h-8 p-1.5 rounded-[20px] flex justify-start items-center gap-1.5">
                        <ArrowRight
                          className={`rotate-[-45deg] transition-colors duration-300 ${
                            hoveredButtonId === `second-${index}`
                              ? "text-white"
                              : "text-black"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FashionGrid;
