import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetBoard = (query) => {
  const [boards, setBoards] = useState([]);

  const getBoards = async () => {
    try {
      const endPoint = `${endPoints.getBoards}/${query}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setBoards(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (query) {
      getBoards();
    }
  }, [query]); // Added query as dependency

  // Return both boards data and the fetch function
  return { data: boards, refetch: getBoards };
};

export default useGetBoard;
