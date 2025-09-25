import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useState } from "react";
import { useSelector } from "react-redux";

const useAddProductToBoard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Move useSelector to top level of hook
  const user = useSelector((state) => state.user.userInfo);
  const userId = user?.id;

  const addProductToBoard = async (boardId, productData) => {
    setLoading(true);
    setError(null);

    try {
      if (!userId) {
        throw new Error("User not logged in");
      }

      // Prepare payload according to your API requirements
      const payload = {
        userId: parseInt(userId, 10),
        productId: productData.id || productData.productId,
        boardId: boardId,
        productVariantId: productData.variantId || productData.productVariantId, // fallback
      };

      const endPoint = `${endPoints.addProductToBoard}`;
      const result = await axiosHttp.post(endPoint, payload);

      setLoading(false);

      // Handle different status codes
      const status = result?.status;
      const serverMessage =
        result?.data?.message || result?.data?.data?.message || result?.message;

      if (status === 200 || status === 201) {
        return {
          success: true,
          message: serverMessage || "Added to board successfully",
        };
      }

      return {
        success: false,
        message: serverMessage || "Something went wrong",
        status,
      };
    } catch (err) {
      setLoading(false);
      setError(err.message || "Something went wrong");

      // Handle axios error responses
      if (err.response) {
        return {
          success: false,
          message:
            err.response.data?.message || err.message || "Something went wrong",
          status: err.response.status,
        };
      }

      return {
        success: false,
        message: err.message || "Something went wrong",
      };
    }
  };

  return {
    addProductToBoard,
    loading,
    error,
  };
};

export default useAddProductToBoard;
