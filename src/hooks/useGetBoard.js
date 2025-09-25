import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetBoard = (query) => {
  const [boards, setBoards] = useState([]);
  console.log("set-oards", boards);
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
    getBoards();
  }, []);
  return boards;
};

export default useGetBoard;
