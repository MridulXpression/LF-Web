import axiosHttp from "@/utils/axioshttp";
import { useState } from "react";

const useUpdateCartQuantity = () => {
  const [loading, setLoading] = useState(false);

  const updateQuantity = async (userId, productId, variantId, quantity) => {
    try {
      setLoading(true);
      const result = await axiosHttp.put("/cart/update-quantity", {
        userId,
        productId,
        variantId,
        quantity,
      });
      if (result?.status === 200) {
        return { success: true, data: result?.data };
      }
      return { success: false };
    } catch (error) {
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return { updateQuantity, loading };
};

export default useUpdateCartQuantity;
