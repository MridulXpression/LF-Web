import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useCollection = (query) => {
  const [products, setProducts] = useState([]);

  const getCollection = async () => {
    try {
      let endPoint;
      if (query) {
        endPoint = `${endPoints.getCollection}?${query}`;
      } else {
        endPoint = `${endPoints.getCollection}`;
      }
      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        setProducts(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCollection();
  }, []);
  return products;
};

export default useCollection;
