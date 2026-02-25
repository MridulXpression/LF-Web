import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetBoardProduct = (query) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Only fetch if query is valid (not null/undefined)
    if (!query) {
      return;
    }

    const getBoardsProducts = async () => {
      try {
        const endPoint = `${endPoints.getBoardsProducts}/${query}`;

        const result = await axiosHttp.get(endPoint);

        if (result?.status === 200) {
          // Check both possible data structures
          const productsData = result?.data?.data || result?.data;
          setProducts(productsData);
        }
      } catch (err) {}
    };

    getBoardsProducts();
  }, [query]);

  return products;
};

export default useGetBoardProduct;
