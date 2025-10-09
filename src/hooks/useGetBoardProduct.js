import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetBoardProduct = (query) => {
  const [products, setProducts] = useState([]);

  const getBoardsProducts = async () => {
    try {
      const endPoint = `${endPoints.getBoardsProducts}/${query}`;

      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setProducts(result?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getBoardsProducts();
  }, [query]);
  return products;
};

export default useGetBoardProduct;
