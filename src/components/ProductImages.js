"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden h-[400px] md:h-[800px]">
        <Image
          src={images[selectedImage]}
          alt={`Product ${selectedImage + 1}`}
          fill
          className="w-full h-auto object-fit"
          priority
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative bg-gray-50 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              selectedImage === idx ? "border-black" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={100}
              height={100}
              className="w-full  object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
