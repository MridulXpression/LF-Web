import React from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartProductCard = ({
  product,
  onRemove,
  onQuantityChange,
  onSizeChange,
  isSelected,
  onToggleSelect,
}) => {
  const discountPercent =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  // Increment Quantity
  const handleIncrease = () => {
    if (product.quantity < 50) {
      onQuantityChange(product.cartItemId, product.quantity + 1);
    }
  };

  // Decrement Quantity
  const handleDecrease = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.cartItemId, product.quantity - 1);
    }
  };

  return (
    <div className="border-b border-gray-300 p-4 mb-4 pb-6">
      <div className="flex gap-4">
        {/* Checkbox for Selection */}
        <div className="flex items-start pt-2">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggleSelect(product.cartItemId)}
            className="w-5 h-5 cursor-pointer accent-black"
          />
        </div>

        {/* Product Image */}
        <Link
          href={`/products/${product.productId}`}
          className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] flex-shrink-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
            className="w-full h-full object-fill rounded"
          />
        </Link>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-black">
                {product.name}
              </h3>
              <p className="text-sm text-black line-clamp-2">
                {product.description}
              </p>
            </div>
            <button
              onClick={() => onRemove(product.productId)}
              className="text-gray-400 hover:text-black cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Size and Quantity */}
          <div className="flex gap-6 mt-3">
            {/* Size */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-black">Size / Color:</span>
              <span className="text-black text-sm">{product.size}</span>
            </div>

            {/* Quantity - with + / - */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-black">Qty:</span>
              <div className="flex items-center border rounded px-2 py-1">
                <button
                  onClick={handleDecrease}
                  className="text-black text-lg font-semibold px-2 hover:text-red-500"
                >
                  −
                </button>
                <span className="px-3 text-sm text-black select-none">
                  {product.quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="text-black text-lg font-semibold px-2 hover:text-green-600"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="font-semibold text-black text-lg">
              Rs. {product.price}
            </span>

            <span className="text-black line-through text-sm">
              Rs. {product.originalPrice}
            </span>
            <span className="text-green-600 text-sm">
              ({discountPercent}% OFF)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
