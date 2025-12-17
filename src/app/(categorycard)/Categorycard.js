// CategorySection.jsx
import React from "react";
import ShopByCategory from "@/components/homepage/CategoryCardComponent";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Men",
      image: "/images/men.png",
      href: "/shop/men",
    },
    {
      id: 2,
      name: "Women",
      image: "/images/women.png",
      href: "/shop/women",
    },

    {
      id: 3,
      name: "Accessories",
      image: "/images/accessories.png",
      href: "/shop/accessories",
    },
  ];

  return (
    <div className="bg-white">
      <ShopByCategory categories={categories} />
    </div>
  );
};

export default CategorySection;
