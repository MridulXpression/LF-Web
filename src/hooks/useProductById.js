import { useEffect, useState } from "react";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";

const useProductById = (id) => {
  const [product, setProduct] = useState(null);

  const getProductDetails = async () => {
    try {
      if (!id) return;
      const endPoint = `${endPoints.productdetialsbyid}/${id}`;
      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        setProduct(result?.data?.data);
      }
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return product;
};

export default useProductById;
