"use client";
import React, { useMemo } from "react";
import useProductsById from "@/hooks/useProductById";
import ProductImageGallery from "@/components/ProductImages";
import ProductInfo from "@/components/ProductHeader";
import ProductActions from "@/components/ProductActions";
import Navbar from "@/app/(navbar)/Navbar";
import ProductDetails from "@/components/ProductDetails";

// Helper to extract unique sizes
const extractSizesFromVariants = (variants) => {
  if (!variants || !Array.isArray(variants)) return [];

  const sizesMap = new Map();

  variants.forEach((variant) => {
    const sizeOption = variant.selectedOptions?.find(
      (option) => option.name === "Size"
    );

    if (sizeOption && sizeOption.value) {
      const sizeValue = sizeOption.value;

      if (!sizesMap.has(sizeValue)) {
        sizesMap.set(sizeValue, {
          label: sizeValue,
          value: sizeValue,
          variantId: variant.id,
          shopifyVariantId: variant.shopifyVariantId,
          available: true,
          price: variant.price,
          compareAtPrice: variant.compareAtPrice,
        });
      }
    }
  });

  const sizeOrder = [
    "XXS",
    "XS",
    "S",
    "M",
    "M/L",
    "L",
    "XL",
    "XXL",
    "2XL",
    "3XL",
  ];
  const sizesArray = Array.from(sizesMap.values());

  return sizesArray.sort((a, b) => {
    const indexA = sizeOrder.indexOf(a.value);
    const indexB = sizeOrder.indexOf(b.value);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });
};

export default function ProductPage({ params }) {
  const unwrappedParams = React.use(params);
  const data = useProductsById(unwrappedParams.id);

  // Extract sizes from variants
  const sizes = useMemo(() => {
    if (!data?.variants) return [];
    return extractSizesFromVariants(data.variants);
  }, [data?.variants]);

  // Calculate discount
  const discount = useMemo(() => {
    if (data?.variants?.[0]?.compareAtPrice && data?.variants?.[0]?.price) {
      const compare = data.variants[0].compareAtPrice;
      const current = data.variants[0].price;
      return Math.round(((compare - current) / compare) * 100);
    }
    return 0;
  }, [data?.variants]);

  // ✅ Show loading spinner while data is being fetched
  if (!data)
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );

  const handleAddToBag = () => {
    console.log("Add to bag clicked");
  };

  const handleAddToWishlist = () => {
    console.log("Add to wishlist clicked");
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Product Images */}
          <ProductImageGallery images={data.imageUrls} />

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            <ProductInfo
              title={data.title}
              brand={data.brand}
              rating={4.5}
              reviews={data.variants?.length || 0}
              price={data.basePrice}
              mrp={(data.variants?.[0]?.compareAtPrice / 100).toFixed(2)}
              discount={discount}
              sizes={sizes}
              variantId={sizes?.[0]?.variantId}
            />

            <ProductActions
              onAddToBag={handleAddToBag}
              onAddToWishlist={handleAddToWishlist}
              productData={data}
            />

            <ProductDetails
              type={data.type}
              title={data.title}
              brand={data.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
