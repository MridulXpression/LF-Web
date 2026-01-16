import { useState } from "react";
import axiosHttp from "@/utils/axioshttp";

const useValidatePromo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validatePromo = async (code) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosHttp.post("/promo/validate", { code });

      if (response.data.status === 200) {
        setLoading(false);
        return {
          success: true,
          data: response.data.data,
        };
      } else {
        setLoading(false);
        setError(response.data.message || "Invalid promo code");
        return {
          success: false,
          error: response.data.message || "Invalid promo code",
        };
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to validate promo code";
      setError(errorMessage);
      setLoading(false);
      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  return { validatePromo, loading, error };
};

export default useValidatePromo;
