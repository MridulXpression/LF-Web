import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useCreateBoard = () => {
  const [boards, setBoards] = useState([]);

  const addBoards = async () => {
    try {
      const endPoint = `${endPoints.addProductToBoard}`;
      const result = await axiosHttp.post(endPoint);
      if (result?.status === 200) {
        setBoards(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    addBoards();
  }, []);
  return boards;
};

export default useCreateBoard;
