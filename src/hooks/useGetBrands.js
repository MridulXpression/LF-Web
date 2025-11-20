import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const usegetBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBrands = async () => {
    try {
      const result = await axiosHttp.get(endPoints.getBrands);
      if (result?.status === 200) {
        setBrands(result?.data?.data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  return { brands, loading };
};

export default usegetBrands;
