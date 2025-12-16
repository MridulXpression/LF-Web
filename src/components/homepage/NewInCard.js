import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  openProductViewModal,
  openWishlistModal,
} from "@/redux/slices/loginmodalSlice";
import WishlistBoardModal from "../WishlistBoardModal";
import Link from "next/link";
import ProductModal from "../Modal";
import { Heart } from "lucide-react";

const NewInCard = ({
  image,
  title,
  brand,
  price,
  originalPrice,
  discount,
  id,
  product,
}) => {
  const dispatch = useDispatch();
  const [showWishlistModal, setShowWishlistModal] = useState(false);

  const handlePreviewClick = (e) => {
    e.preventDefault();
    dispatch(openProductViewModal(product));
  };

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowWishlistModal(true);
    dispatch(openWishlistModal());
  };

  const sellingPrice = Number(price);
  const mrpValue = Number(product?.mrp ?? originalPrice ?? 0);

  const showOriginalPrice =
    mrpValue > 0 && sellingPrice > 0 && mrpValue > sellingPrice;

  const discountPercentage = showOriginalPrice
    ? Math.round(((mrpValue - sellingPrice) / mrpValue) * 100)
    : 0;

  const productData = {
    id,
    imageUrls: [image],
    title,
    brand: product?.brand?.name || brand,
    rating: product?.rating || 0,
    reviewCount: product?.reviewCount || 0,
    basePrice: sellingPrice,
    mrp: showOriginalPrice ? mrpValue : null,
    discountPercentage: showOriginalPrice ? discountPercentage : 0,
  };

  return (
    <>
      <Link
        href={`/products/${id}`}
        onClick={() => localStorage.setItem("ProductId", id)}
      >
        <div className="w-96 rounded-xl inline-flex flex-col gap-2.5 overflow-hidden cursor-pointer">
          {/* Image */}
          <div className="relative h-[250px] p-6 bg-stone-100 rounded-xl overflow-hidden">
            <Image src={image} alt={title} fill className="object-fill" />

            {/* Hover Preview */}
            <button
              onClick={handlePreviewClick}
              className="absolute left-[15px] bottom-3 w-80 h-12 py-2 bg-stone-50 rounded-lg outline outline-[0.5px] outline-offset-[-0.5px] flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer hover:bg-stone-100"
            >
              <span className="text-stone-950 text-sm font-medium">
                Product Preview
              </span>
            </button>
          </div>

          {/* Details */}
          <div className="px-3 pb-3 flex flex-col gap-1">
            <div className="py-2 flex flex-col gap-2">
              <div className="flex gap-2.5">
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="text-[16px] font-[600] uppercase text-[#0F0F0F] ">
                    {title}
                  </h3>
                  <p className="text-[14px] uppercase font-[400] text-[#0F0F0F]">
                    {brand}
                  </p>
                </div>

                <button
                  onClick={handleLikeClick}
                  className="w-6 h-6 transition-transform cursor-pointer"
                >
                  <Heart size={18} className="text-black" />
                </button>
              </div>

              <div className="flex items-center gap-1">
                {/* Selling Price */}
                <span className="text-[14px] font-[500] text-[#292929] uppercase">
                  ₹{sellingPrice}
                </span>

                {/* Original Price (ONLY if mrp valid) */}
                {showOriginalPrice && (
                  <span className="text-[14px] text-black font-[500] opacity-60 line-through uppercase">
                    ₹{mrpValue}
                  </span>
                )}

                {/* Discount */}
                {showOriginalPrice && (
                  <span className="text-sm font-medium text-emerald-600 uppercase">
                    ({discountPercentage}% OFF)
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Modals */}
      <ProductModal />

      {showWishlistModal && (
        <WishlistBoardModal
          productData={productData}
          onClose={() => setShowWishlistModal(false)}
        />
      )}
    </>
  );
};

export default NewInCard;
