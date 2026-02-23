import { useEffect, useState } from "react";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";

const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      if (!id) return;
      const endPoint = `${endPoints.productdetialsbyid}/${id}`;
      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        fbq("track", "ViewContent", {
          content_ids: [id],
          content_name: result?.data?.data?.title || "Product",
          content_type: "product",
          value: result?.data?.data?.basePrice || 0,
          currency: "INR",
        });
        setProduct(result?.data?.data);
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Failed to load product";
      const errorStatus = err?.response?.data?.status || err?.response?.status;
      setError({ message: errorMessage, status: errorStatus });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return { product, loading, error };
};

export default useProductById;
