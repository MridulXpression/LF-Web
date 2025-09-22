import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useAddProductToBoard = () => {
  const [boards, setBoards] = useState([]);

  const addProductToBoard = async () => {
    try {
      const endPoint = `${endPoints.addProductToBoard}`;
      const result = await axiosHttp.post(endPoint);
      if (result?.status === 200) {
        setBoards(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    addProductToBoard();
  }, []);
  return boards;
};

export default useAddProductToBoard;
