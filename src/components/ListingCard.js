import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import CreateBoardModal from "./WishlistBoardModal";

const ListingCard = ({
  images,
  title,
  brand,
  rating,
  reviewCount,
  currentPrice,
  originalPrice,
  discountPercentage,
  id,
  onCreateBoard,
  onGetBoards,
  onAddProductToBoard,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(true);
    setIsModalOpen(true);
  };

  const productData = {
    id,
    images,
    title,
    brand,
    rating,
    reviewCount,
    currentPrice,
    originalPrice,
    discountPercentage,
  };

  return (
    <>
      <div className="relative overflow-hidden w-[220px] h-[500px] flex flex-col">
        {/* Product Image */}
        <div className="relative bg-gray-50 overflow-hidden group flex-shrink-0 h-[300px]">
          <img
            src={
              images?.length > 0
                ? images[0]
                : "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?..."
            }
            alt={title || "Product"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Action Icons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {/* Wishlist Icon */}
            <button
              onClick={handleWishlistClick}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <Heart
                size={16}
                className={`${
                  isWishlisted ? "text-red-500 fill-red-500" : "text-gray-600"
                } transition-colors duration-200`}
              />
            </button>

            {/* Shopping Bag */}
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <ShoppingBag size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 justify-between">
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-900">
                  {rating}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i < Math.floor(rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              {reviewCount && (
                <span className="text-xs text-gray-500">| {reviewCount}</span>
              )}
            </div>
          )}

          {/* Brand */}
          {brand && (
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide mb-1">
              {brand}
            </p>
          )}

          {/* Title */}
          <h3
            className="text-sm font-medium text-gray-900 mb-3 leading-tight"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title || "Product Title"}
          </h3>

          {/* Price Section */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-base font-bold text-gray-900 ">
                Rs. {currentPrice}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  Rs. {originalPrice}
                </span>
              )}
              {discountPercentage && (
                <span className="text-xs text-green-600 font-medium">
                  ({discountPercentage}% OFF)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CreateBoardModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productData={productData}
          onCreateBoard={onCreateBoard}
          onGetBoards={onGetBoards}
          onAddProductToBoard={onAddProductToBoard}
        />
      )}
    </>
  );
};

export default ListingCard;
