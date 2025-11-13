"use client";
import React, { useMemo, useState, useEffect } from "react";
import useProductsById from "@/hooks/useProductById";
import ProductImageGallery from "@/components/ProductImages";
import ProductInfo from "@/components/ProductHeader";
import ProductActions from "@/components/ProductActions";
import Navbar from "@/app/(navbar)/Navbar";
import ProductDetails from "@/components/ProductDetails";
import ReviewCard from "@/components/ReviewCard";
import ProductDelivery from "@/components/ProductDelivery";
import axiosHttp from "@/utils/axioshttp";

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
      const availableStock = variant.inventory?.availableStock ?? 0;

      if (!sizesMap.has(sizeValue)) {
        sizesMap.set(sizeValue, {
          label: sizeValue,
          value: sizeValue,
          variantId: variant.id,
          shopifyVariantId: variant.shopifyVariantId,
          available: availableStock > 0, // ✅ Disable if stock = 0
          price: variant.price,
          compareAtPrice: variant.compareAtPrice,
        });
      }
    }
  });

  // Order sizes
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
  const [deliveryInfo, setDeliveryInfo] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Extract sizes
  const sizes = useMemo(() => {
    if (!data?.variants) return [];
    return extractSizesFromVariants(data.variants);
  }, [data?.variants]);

  // ✅ Get selected variant from localStorage
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    if (data?.variants?.length) {
      const storedVariantId = localStorage.getItem("selectedVariantId");
      const foundVariant = data.variants.find(
        (variant) => variant.id === Number(storedVariantId)
      );

      // If no stored variant, default to first variant
      setSelectedVariant(foundVariant || data.variants[0]);
    }
  }, [data]);

  // ✅ Use variant price dynamically (fallback to first variant)
  const variantPrice =
    selectedVariant?.price ?? data?.variants?.[0]?.price ?? 0;

  // ✅ Calculate discount
  const discount = useMemo(() => {
    if (data?.mrp && variantPrice) {
      const mrp = parseFloat(data.mrp);
      const price = parseFloat(variantPrice);
      if (mrp > price) {
        return Math.round(((mrp - price) / mrp) * 100);
      }
    }
    return 0;
  }, [data?.mrp, variantPrice]);

  const handleCheckPincode = async (pin) => {
    try {
      const storedVariantId = localStorage.getItem("selectedVariantId");
      const variantId = storedVariantId || sizes?.[0]?.variantId;

      if (!variantId || !pin || pin.length !== 6) return;

      const payload = { variantId, deliveryPostalCode: pin };
      const response = await axiosHttp.post("/check-serviceability", payload);

      if (response?.data?.status === 200 && response?.data?.data) {
        const { courier, estimatedDate, estimatedDays } = response.data.data;

        setDeliveryInfo([
          {
            icon: "truck",
            title: "Delivery Details",
            description: `Estimated Date: ${estimatedDate}\nEstimated Days: ${estimatedDays}`,
          },
        ]);
      } else {
        setDeliveryInfo([
          {
            icon: "truck",
            title: "Delivery Info",
            description: response?.data?.message || "Something went wrong.",
          },
        ]);
      }
    } catch (error) {
      const backendMessage = error?.response?.data?.message;
      if (typeof backendMessage === "string") {
        setDeliveryInfo([
          {
            icon: "truck",
            title: "Delivery Info",
            description: backendMessage,
          },
        ]);
      } else {
        setDeliveryInfo([
          {
            icon: "truck",
            title: "Delivery Info",
            description: "Could not fetch delivery info.",
          },
        ]);
      }
    }
  };

  const getReviews = async () => {
    try {
      const response = await axiosHttp.get(`/reviews?productId=${data.id}`);
      // Support API shape where review(s) are returned in response.data.data
      if (response?.data?.status === 200) {
        const payload = response.data.data;
        if (Array.isArray(payload)) {
          setReviews(payload);
        } else if (payload) {
          // single review object -> wrap in array
          setReviews([payload]);
        } else if (response.data.reviews) {
          // fallback for older shape
          setReviews(response.data.reviews);
        }
      }
    } catch (error) {
      console.error(
        "Error fetching reviews:",
        error?.response?.data?.message || error.message
      );
    }
  };

  // Fetch reviews when product data becomes available
  useEffect(() => {
    if (data?.id) {
      getReviews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id]);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );

  const handleAddToBag = () => console.log("Add to bag clicked");
  const handleAddToWishlist = () => console.log("Add to wishlist clicked");

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Images */}
          <ProductImageGallery images={data.imageUrls} />

          {/* Right - Product Details */}
          <div className="space-y-6">
            <ProductInfo
              title={data.title}
              brand={data.brand?.name}
              rating={4.5}
              reviews={data.variants?.length || 0}
              price={variantPrice}
              mrp={data.mrp}
              discount={discount}
              sizes={sizes}
              variantId={selectedVariant?.id || sizes?.[0]?.variantId}
            />

            <ProductActions
              onAddToBag={handleAddToBag}
              onAddToWishlist={handleAddToWishlist}
              productData={data}
            />

            <ProductDelivery
              pincode=""
              deliveryInfo={deliveryInfo}
              onCheckPincode={handleCheckPincode}
            />

            <ProductDetails
              type={data.type}
              title={data.title}
              brand={data.description}
            />
          </div>
        </div>

        {/* Reviews */}
        <div className="pt-[50px]">
          {reviews && reviews.length > 0 ? (
            reviews.map((r) => {
              const created = r.createdAt ? new Date(r.createdAt) : null;
              // simple relative time formatter
              const timeAgo = (() => {
                if (!created) return "just now";
                const diff = Date.now() - created.getTime();
                const mins = Math.floor(diff / 60000);
                if (mins < 1) return "just now";
                if (mins < 60)
                  return `${mins} minute${mins > 1 ? "s" : ""} ago`;
                const hours = Math.floor(mins / 60);
                if (hours < 24)
                  return `${hours} hour${hours > 1 ? "s" : ""} ago`;
                const days = Math.floor(hours / 24);
                return `${days} day${days > 1 ? "s" : ""} ago`;
              })();

              return (
                <ReviewCard
                  key={r.id || `${r.userId}-${r.createdAt}`}
                  name={r.user.fullName}
                  rating={r.rating}
                  timeAgo={timeAgo}
                  comment={r.comment}
                  size={r.product_variant.title}
                />
              );
            })
          ) : (
            <div className="text-gray-500">No reviews yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}
