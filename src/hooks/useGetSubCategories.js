import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetProductBySubCategories = (query) => {
  const [products, setProducts] = useState([]);

  const getProductBySubCategories = async () => {
    try {
      const endPoint = `${endPoints.getProductBySubCategroies}=${query}`;

      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setProducts(result?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getProductBySubCategories();
  }, [query]);

  return products;
};

export default useGetProductBySubCategories;
