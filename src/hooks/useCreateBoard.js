import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useState } from "react";

const useCreateBoard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBoard = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      // payload should contain: { userId, name }
      const endPoint = `${endPoints.addBoard}`; // Make sure this is the correct endpoint
      const result = await axiosHttp.post(endPoint, payload);

      if (result?.status === 200 || result?.status === 201) {
        setLoading(false);
        return result?.data?.data || result?.data; // Return the created board
      } else {
        throw new Error("Failed to create board");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false);
      throw err; // Re-throw so the component can handle it
    }
  };

  return {
    createBoard,
    loading,
    error,
  };
};

export default useCreateBoard;
