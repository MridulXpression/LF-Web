import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetCategoriesHierarchy = () => {
  const [categories, setCategories] = useState([]);

  const getCategoriesHierarchy = async () => {
    try {
      const endPoint = `${endPoints.getCategoriesHierarchy}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setCategories(result?.data?.data);
      }
    } catch (err) {
      console.error("Error fetching categories hierarchy:", err);
    }
  };

  useEffect(() => {
    getCategoriesHierarchy();
  }, []);

  return categories;
};

export default useGetCategoriesHierarchy;
