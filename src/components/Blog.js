"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FashionGrid = ({ data, title = "TRENDING NOW" }) => {
  // Helper function to get container classes based on size
  const getContainerClasses = (size) => {
    const baseClasses = "relative overflow-hidden group cursor-pointer";

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
        return "absolute top-6 left-6 text-white";
      case "bottom-left":
        return "absolute bottom-6 left-6 text-white";
      case "center-left":
        return "absolute top-[20%] left-8 transform -translate-y-1/2 text-white max-w-md";
      default:
        return "absolute bottom-6 left-6 text-white";
    }
  };

  // Helper function to get title classes
  const getTitleClasses = (size, titleColor = "text-white") => {
    const baseClasses = "font-bold mb-2";
    const colorClass = titleColor || "text-white";

    switch (size) {
      case "large":
        return `text-xl md:text-3xl ${baseClasses} ${colorClass}`;
      case "extra-large":
        return `text-xl md:text-4xl ${baseClasses} ${colorClass}`;
      default:
        return `text-lg md:text-2xl ${baseClasses} ${colorClass}`;
    }
  };

  // Helper function to get description classes
  const getDescriptionClasses = (textColor = "text-white") => {
    const colorClass = textColor || "text-white";
    return `text-xs md:text-sm opacity-90 ${colorClass}`;
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
    <div className="min-h-screen bg-white">
      <div className="text-center text-[40px] text-black font-[500] mb-[20px]">
        <h2>{title}</h2>
      </div>

      {/* First Row */}
      <div className="flex flex-col md:flex-row max-w-full">
        {firstRowItems.map((item, index) => {
          const fixedSize = fixedSizes[index];
          return (
            <Link
              key={item.id}
              href={`/blogs/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={getContainerClasses(fixedSize.size)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={fixedSize.width}
                height={fixedSize.height}
                className="w-full h-full object-fill group-hover:scale-120 transition-transform duration-300"
              />
              <div
                className={getTextPositionClasses(
                  item.position || "bottom-left"
                )}
              >
                <h2
                  className={getTitleClasses(fixedSize.size, item.titleColor)}
                >
                  {item.title}
                </h2>
                <p className={getDescriptionClasses(item.textColor)}>
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row max-w-full">
        {secondRowItems.map((item, index) => {
          const fixedSize = fixedSizes[index + 3];
          return (
            <Link
              key={item.id}
              href={`/blogs/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={getContainerClasses(fixedSize.size)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={fixedSize.width}
                height={fixedSize.height}
                className="w-full h-full object-fill group-hover:scale-120 transition-transform duration-300"
              />
              <div
                className={getTextPositionClasses(
                  item.position || "bottom-left"
                )}
              >
                <h2
                  className={getTitleClasses(fixedSize.size, item.titleColor)}
                >
                  {item.title}
                </h2>
                <p className={getDescriptionClasses(item.textColor)}>
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FashionGrid;
