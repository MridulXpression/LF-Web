import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";

const useFilterProducts = () => {
  const filterProducts = async (payload) => {
    try {
      const endPoint = `${endPoints.getFiltersData}`;
      const result = await axiosHttp.post(endPoint, payload);

      if (result?.status === 200) {
        return result?.data?.data || [];
      } else {
        return [];
      }
    } catch (err) {
      console.error("Error filtering products:", err);
      return [];
    }
  };

  return filterProducts;
};

export default useFilterProducts;
