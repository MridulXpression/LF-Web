import React from "react";
import { X } from "lucide-react";

const CartProductCard = ({
  product,
  onRemove,
  onQuantityChange,
  onSizeChange,
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
    if (product.quantity > 50) {
      onQuantityChange(product.cartItemId, product.quantity - 1);
    }
  };

  return (
    <div className="border-b border-gray-300 p-4 mb-4 pb-6">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="w-32 h-40 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded"
          />
        </div>

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
              <span className="text-sm text-black">Size:</span>
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
            {product.originalPrice > product.price && (
              <>
                <span className="text-black line-through text-sm">
                  Rs. {product.originalPrice}
                </span>
                <span className="text-green-600 text-sm">
                  ({discountPercent}% OFF)
                </span>
              </>
            )}
          </div>

          {/* Additional Info */}
          {(product.hasCOD || product.hasExchange) && (
            <div className="mt-2 flex gap-3 text-xs text-black">
              {product.hasCOD && (
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  COD Available
                </span>
              )}
              {product.hasExchange && (
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {product.exchangeDays} days exchange
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
