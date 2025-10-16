import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useCategories = (query) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let endPoint;
      if (query) {
        endPoint = `${endPoints.getCategories}?${query}`;
      } else {
        endPoint = `${endPoints.getCategories}`;
      }

      const result = await axiosHttp.get(endPoint);

      if (result?.status === 200) {
        setCategories(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCategories();
  }, []);
  return categories;
};

export default useCategories;
