import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useSortedProducts = (query) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  const fetchSortedProducts = async () => {
    try {
      const endPoint = query
        ? `${endPoints.sortProduct}?${query}`
        : `${endPoints.sortProduct}`;

      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        setSortedProducts(result?.data?.data);
      }
    } catch (err) {
      const error = err.response?.data?.message;
    }
  };

  useEffect(() => {
    fetchSortedProducts();
  }, [query]);

  return sortedProducts;
};

export default useSortedProducts;
