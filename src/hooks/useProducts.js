import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useProducts = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      setLoading(true);

      let endPoint;
      if (query) {
        endPoint = `${endPoints.getProducts}&${query}`;
      } else {
        endPoint = `${endPoints.getProducts}`;
      }

      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        setProducts(result?.data?.data?.products || []);
      } else {
        setProducts([]);
      }
    } catch (err) {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return { products, loading };
};

export default useProducts;
