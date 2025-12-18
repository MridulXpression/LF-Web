import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openWishlistModal } from "@/redux/slices/loginmodalSlice";
import WishlistBoardModal from "../WishlistBoardModal";

const ProductCollectionCard = ({ product, onLike }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);

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
      <div className="w-full rounded-xl inline-flex flex-col gap-2.5 overflow-hidden">
        <Link
          href={`/products/${product.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image */}
          <div className="relative h-[400px] p-9 bg-stone-200 rounded-xl overflow-hidden">
            {product?.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="absolute inset-0 object-fill"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-300" />
            )}

            {product?.hasOverlay && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
            )}
          </div>
        </Link>
        {/* Content */}
        <div className="px-3 pb-3 flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="">
              <p className="text-[15px] font-semibold uppercase text-black">
                {truncateText(product.name, 24)}
              </p>

              <p className="text-sm uppercase text-black">{product.brand}</p>
            </div>

            <button onClick={handleLike} className="cursor-pointer">
              <Heart className={`w-5 h-5 text-black`} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-black">Rs. {price}</span>

            {showOriginalPrice && (
              <>
                <span className="line-through opacity-60 text-sm text-black">
                  Rs. {originalPrice}
                </span>

                <span className="text-emerald-600 text-sm">
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
            imageUrls: [product.image],
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
