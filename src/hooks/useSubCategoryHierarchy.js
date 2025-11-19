import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useCategoryProducts = (category) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);

  const fetchCategoryProducts = async () => {
    try {
      setIsCategoryLoading(true);

      // Endpoint remains SAME
      const endPoint = `${endPoints.getProductsByCategory}=${category}`;

      const response = await axiosHttp.get(endPoint);

      if (response?.status === 200) {
        setCategoryProducts(response?.data?.data);
      } else {
        setCategoryProducts([]);
      }
    } catch (error) {
      setCategoryProducts([]);
    } finally {
      setIsCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [category]);

  return { categoryProducts, isCategoryLoading };
};

export default useCategoryProducts;
