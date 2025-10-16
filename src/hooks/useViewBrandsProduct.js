import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetBrandsProducts = (query) => {
  const [brandsProducts, setBrandsProducts] = useState([]);

  const getBrandsProducts = async () => {
    try {
      const endPoint = `${endPoints.getBrandsProducts}/${query}`;
      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        setBrandsProducts(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getBrandsProducts();
  }, [query]);
  return brandsProducts;
};

export default useGetBrandsProducts;
