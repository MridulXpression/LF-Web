import { useState } from "react";
import { X, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { closeProductViewModal } from "@/redux/slices/loginmodalSlice";
import Link from "next/link";

const ProductModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.productViewModal);
  const product = useSelector((state) => state.modal.selectedProduct);

  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  // Replace onClose prop with dispatch
  const handleClose = () => {
    dispatch(closeProductViewModal());
  };

  if (!isOpen || !product) return null;

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0  bg-black/10 backdrop-blur-[3px] flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="bg-white w-full max-w-3xl  overflow-hidden">
        <div className="flex flex-col md:flex-row overflow-y-auto  max-h-[400px]">
          {/* Product Image */}
          <div className="md:w-1/2 w-full relative bg-gray-50 flex items-center justify-center ">
            {/* <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
            </button> */}

            <div className="relative w-full h-70 md:h-[400px]">
              <Image
                src={
                  product?.imageUrls
                    ? product?.imageUrls[0]
                    : "https://cdn.shopify.com/s/files/1/0553/6186/3863/products/0I1A6958copy-pichi.jpg?v=1617717071"
                }
                alt={product?.title || "product-img"}
                fill
                className="object-fill"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
            {/* Header with Close Button */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  {product.title}
                </h2>
                <p className="text-xl text-gray-900">Rs. {product.basePrice}</p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8   flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-600 mb-1 text-sm leading-snug">
                {product.description?.split(" ").slice(0, 25).join(" ") +
                  (product.description?.split(" ").length > 25 ? "..." : "")}
              </p>
            </div>

            {/* Size Selection */}
            {/* <div className="mb-4">
              <label className="block text-black font-medium mb-2 text-sm">
                Size: {selectedSize}
              </label>
              <div className="relative w-24">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 appearance-none bg-white focus:outline-none focus:border-black text-sm text-black"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div> */}

            {/* Quantity and Add to Cart */}
            {/* <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded-md w-24 text-black">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="p-1 hover:bg-gray-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="flex-1 text-center py-1 border-x border-gray-300 text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="p-1 hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <button className="bg-white border border-black text-black py-2 px-5 rounded-md hover:bg-gray-50 transition-colors font-medium text-sm w-full sm:w-auto">
                Add to cart
              </button>
            </div> */}

            {/* View Product Details Button */}
            <div>
              <Link
                href={`/products/${product.id} `}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => localStorage.setItem("ProductId", id)}
                className="w-full sm:w-[120px] bg-black text-white py-2 px-4 rounded-md transition-colors font-medium text-sm"
              >
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
