// CategorySection.jsx
import React from "react";
import CategoryCard from "@/components/CategoryCard";

const CategorySection = () => {
  const categories = [
    {
      title: "",
      backgroundImage: "/images/women.png",
      href: "/shop/women",
    },
    {
      title: "",
      backgroundImage: "/images/men.png",
      href: "/shop/men",
    },
    {
      title: "",
      backgroundImage: "/images/accessories.png",
      href: "/shop/accessories",
    },
  ];

  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 ">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              backgroundImage={category.backgroundImage}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
