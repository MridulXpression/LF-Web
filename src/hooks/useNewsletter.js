import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useNewsletter = () => {
  const [newsletters, setNewsletters] = useState([]);

  const getNewsletter = async () => {
    try {
      const endPoint = `${endPoints.getNewsletters}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setNewsletters(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getBlog();
  }, []);
  return blogs;
};

export default useNewsletter;
