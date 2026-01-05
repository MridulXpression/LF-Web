import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  openWishlistModal,
  openProductViewModal,
} from "@/redux/slices/loginmodalSlice";
import WishlistBoardModal from "../WishlistBoardModal";
const ProductCollectionCard = ({ product, onLike }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images || [product.image];
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  const handlePreviewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const modalProduct = {
      id: product.id,
      title: product.name,
      imageUrls: images,
      basePrice: price,
      description: product.description || "",
      brand: product.brand,
      variants: product.variants || [],
      availableSizes: product.availableSizes || [],
    };
    dispatch(openProductViewModal(modalProduct));
  };

  const handleImageHover = (index) => {
    setIsHovering(true);
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setShowWishlistModal(true);
    dispatch(openWishlistModal());
    onLike?.(product.id);
  };
  const price = Number(product.price);
  const originalPrice = Number(product.originalPrice);

  // valid original price only if greater than price
  const showOriginalPrice = originalPrice > 0 && originalPrice > price;

  // discount calculation
  const discountPercentage = showOriginalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  const truncateText = (text, limit = 24) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <>
      <div className="w-full rounded-xl inline-flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 overflow-hidden">
        <Link
          href={`/products/${product.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image */}
          <div
            className="relative h-[250px] sm:h-[280px] md:h-[340px] lg:h-[400px] 
             p-4 sm:p-6 md:p-8 lg:p-6 
             bg-stone-200 rounded-xl overflow-hidden group
             flex items-center justify-center"
            onMouseLeave={handleMouseLeave}
          >
            {images && images.length > 0 ? (
              <>
                <Image
                  src={images[currentImageIndex]}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                  priority={false}
                />

                {/* Hover Zones */}
                {images.length > 1 && (
                  <div
                    className="absolute inset-0 flex"
                    onMouseEnter={() => setIsHovering(true)}
                  >
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className="flex-1 cursor-pointer"
                        onMouseEnter={() => handleImageHover(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-300" />
            )}

            {product?.hasOverlay && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
            )}

            {/* Preview Button */}
            <button
              onClick={handlePreviewClick}
              className="absolute left-1 bottom-1 sm:left-2 sm:bottom-2 
               w-[calc(100%-8px)] sm:w-[calc(100%-16px)] 
               h-8 sm:h-10 bg-stone-50 rounded-lg
               flex justify-center items-center
               opacity-0 group-hover:opacity-100 transition-opacity
               hover:bg-stone-100 cursor-pointer"
            >
              <span className="text-stone-950 text-xs sm:text-sm font-medium ">
                Product Preview
              </span>
            </button>
          </div>
        </Link>
        {/* Content */}
        <div className="px-2 sm:px-3 pb-2 sm:pb-3 flex flex-col gap-1.5 sm:gap-2">
          <div className="flex justify-between items-start gap-2">
            <div className="">
              <p className="text-xs sm:text-sm md:text-base font-[600] uppercase text-black leading-tight">
                {truncateText(product.name, 24)}
              </p>

              <p className="text-[11px] sm:text-xs md:text-sm uppercase font-[400] text-black">
                {product.brand}
              </p>
            </div>

            <button
              onClick={handleLike}
              className="cursor-pointer flex-shrink-0"
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 text-black`} />
            </button>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <span className="font-medium text-xs sm:text-sm md:text-base text-black">
              ₹{price}
            </span>

            {showOriginalPrice && (
              <>
                <span className="line-through opacity-60 text-xs sm:text-sm text-black">
                  ₹{originalPrice}
                </span>

                <span className="text-emerald-600 text-xs sm:text-sm">
                  ({discountPercentage}% OFF)
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {showWishlistModal && (
        <WishlistBoardModal
          productData={{
            id: product.id,
            imageUrls: images,
            title: product.name,
            brand: product.brand,
            basePrice: price,
            mrp: showOriginalPrice ? originalPrice : null,
            discountPercentage: showOriginalPrice ? discountPercentage : 0,
          }}
          onClose={() => setShowWishlistModal(false)}
        />
      )}
    </>
  );
};

export default ProductCollectionCard;
