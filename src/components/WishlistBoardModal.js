"use client";

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import useAddProductToBoard from "@/hooks/useAddProductToBoard";
import useCreateBoard from "@/hooks/useCreateBoard";
import useGetBoard from "@/hooks/useGetBoard";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";

const CreateBoardModal = ({ isOpen, onClose, productData }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [newBoardName, setNewBoardName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const user = useSelector((state) => state.user.userInfo);

  const {
    addProductToBoard,
    loading: addProductLoading,
    error: addProductError,
  } = useAddProductToBoard();
  const {
    createBoard,
    loading: createBoardLoading,
    error: createBoardError,
  } = useCreateBoard();

  const query = user?.id;
  const getBoards = useGetBoard(query);
  console.log("modal-boards", getBoards);

  const handleCreateBoard = async () => {
    if (!newBoardName.trim()) return;

    setIsCreating(true);
    try {
      const userId = user?.id;
      const payload = {
        userId: parseInt(userId, 10),
        name: newBoardName.trim(),
      };

      const response = await createBoard(payload); // Store the response
      setNewBoardName("");
      toast.success(response?.message || "Board created successfully!"); // Use the response
    } catch (error) {
      console.error("Error creating board:", error);
      toast.error(error?.message || "Failed to create board");
    } finally {
      setIsCreating(false);
    }
  };

  const handleContinue = async () => {
    if (!selectedBoard || !productData) return;

    setIsAddingProduct(true);
    try {
      const response = await addProductToBoard(selectedBoard.id, productData);

      if (response?.success) {
        toast.success(response.message || "Added to board successfully");
        // Keep modal open briefly so the toast remains visible if Toaster is in-modal
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(response?.message || "Failed to add product to board");

        // Close modal after a short delay for error cases
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error adding product to board:", error);
      toast.error(error?.message || "Failed to add product to board");

      // Close modal after a short delay for caught errors
      setTimeout(() => {
        onClose();
      }, 2000);
    } finally {
      setIsAddingProduct(false);
    }
  };

  const handleBoardSelect = (board) => {
    setSelectedBoard((prev) => (prev?.id === board.id ? null : board));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-xs bg-opacity-50"
        onClick={onClose}
      />
      <Toaster position="top-right" reverseOrder={false} />

      <div className="relative bg-white   w-full max-w-3xl mx-4 flex overflow-hidden max-h-[90vh]">
        {/* Left Panel */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                CREATE BOARD
              </h2>
              <p className="text-sm text-gray-600 ">
                Create your own collection
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Create New Board Section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Create New Board
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Write Name"
                value={newBoardName}
                onChange={(e) => setNewBoardName(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300    text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 text-black"
                onKeyDown={(e) => e.key === "Enter" && handleCreateBoard()}
              />
              <button
                onClick={handleCreateBoard}
                disabled={!newBoardName.trim() || isCreating}
                className="px-4 py-2 bg-gray-900 text-white    text-sm font-medium hover:bg-gray-800 disabled:bg-gray-400 flex items-center gap-1"
              >
                <Plus size={16} />
                {isCreating ? "Creating..." : "Create"}
              </button>
            </div>
          </div>

          {/* Existing Boards */}
          <div className="mb-6 h-[290px]">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Select Existing Board
            </h3>
            <div className="space-y-2 max-h-[250px] overflow-y-auto">
              {!getBoards ? (
                <div className="text-center py-4 text-gray-500">
                  Loading boards...
                </div>
              ) : getBoards.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                  No boards found
                </div>
              ) : (
                getBoards.map((board) => (
                  <div
                    key={board.id}
                    onClick={() => handleBoardSelect(board)}
                    className={`flex items-center gap-3 p-3 border   cursor-pointer transition-colors ${
                      selectedBoard?.id === board.id
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* <div className="w-10 h-10 bg-gray-100   flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-gray-600">📋</span>
                    </div> */}
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        {board.name}
                      </h4>
                    </div>
                    <span className="text-sm text-gray-400">
                      {board.productCount || 0}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedBoard || isAddingProduct || addProductLoading}
            className="w-full bg-gray-900 text-white py-3    font-medium hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isAddingProduct || addProductLoading
              ? "Adding Product..."
              : "Continue"}
          </button>
        </div>

        {/* Right Panel - Product Preview */}
        <div className="w-80 bg-gray-50 p-6 flex flex-col">
          {productData ? (
            <div className="flex flex-col h-full">
              <div className="aspect-[3/4] bg-white   overflow-hidden mb-4">
                <Image
                  src={productData.images?.[0]}
                  alt={productData.title}
                  width={400}
                  height={400}
                  className=" object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col">
                {productData.rating && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-black">
                        {productData.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${
                              i < Math.floor(productData.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    {productData.reviewCount && (
                      <span className="text-xs text-gray-500">
                        | {productData.reviewCount}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {productData.brand || "BRAND"}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {productData.title}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-bold text-gray-900">
                      Rs. {productData.currentPrice}
                    </span>
                    {productData.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        Rs. {productData.originalPrice}
                      </span>
                    )}
                  </div>
                  {productData.discountPercentage && (
                    <span className="text-sm text-green-600 font-medium">
                      ({productData.discountPercentage}% OFF)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No product selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateBoardModal;
