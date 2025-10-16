import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const usegetBrands = () => {
  const [brands, setBrands] = useState([]);

  const getBrands = async () => {
    try {
      const endPoint = `${endPoints.getBrands}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setBrands(result?.data?.data);
      }
    } catch (err) {
      //error.resposne.data.message
    }
  };

  useEffect(() => {
    getBrands();
  }, []);
  return brands;
};

export default usegetBrands;
