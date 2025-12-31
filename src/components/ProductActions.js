"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openWishlistModal } from "@/redux/slices/loginmodalSlice";
import CreateBoardModal from "./WishlistBoardModal";
import useAddProductToCart from "@/hooks/useAddProductToCart";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/redux/slices/cartSlice";

const ProductActions = ({
  onAddToWishlist,
  productData,
  productId,
  quantity = 1,
  isInStock = true,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { addProductToCart, loading } = useAddProductToCart();

  const handleWishlistClick = () => {
    setShowModal(true);
    dispatch(openWishlistModal());
  };

  const handleAddToBag = async () => {
    if (!isInStock) {
      toast.error("Out of Stock", { position: "top-center" });
      return;
    }
    const result = await addProductToCart(productId, quantity);

    const variantId = localStorage.getItem("selectedVariantId");
    dispatch(addToCart({ product: productData, variantId }));

    if (result.success) {
      toast.success(result.message, {
        position: "top-center",
      });
    } else {
      toast.error(result.message, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleAddToBag}
          disabled={loading || !isInStock}
          className="w-full cursor-pointer bg-black text-white py-3.5 rounded font-bold text-sm   shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Adding..." : !isInStock ? "Out of Stock" : "Add to Bag"}
        </button>

        <button
          onClick={handleWishlistClick}
          className="w-full cursor-pointer border border-gray-300 text-gray-900 py-3.5 rounded font-bold text-sm hover:border-gray-400 transition-colors"
        >
          WISHLIST
        </button>
      </div>

      {showModal && (
        <CreateBoardModal
          productData={productData}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Toaster Component */}
      <Toaster />
    </>
  );
};

export default ProductActions;
