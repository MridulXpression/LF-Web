// ProductCard.jsx
import React from "react";

const BrandProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white overflow-hidden  transition-shadow">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-lg font-semibold text-gray-900">₹ {price}</p>
      </div>
    </div>
  );
};

export default BrandProductCard;
