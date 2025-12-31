// ProductCard.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandProductCard = ({ image, title, price, productId, mrp }) => {
  return (
    <div className="bg-white overflow-hidden  transition-shadow">
      <Link href={`/products/${productId}`}>
        <div className="aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-gray-900">₹ {price}</p>
            {mrp > price && (
              <>
                <p className="text-sm text-gray-500 line-through">₹ {mrp}</p>
                <p className="text-sm text-green-600 font-medium">
                  ({Math.round(((mrp - price) / mrp) * 100)}% OFF)
                </p>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandProductCard;
