import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useState } from "react";
import toast from "react-hot-toast";

const useLogout = () => {
  const [logoutResponse, setLogoutResponse] = useState(null);

  const onLogout = async (userId) => {
    try {
      const endPoint = `${endPoints.logout}/${userId}`;
      const result = await axiosHttp.post(endPoint);

      if (result?.status === 200) {
        const message = result?.data?.message;
        toast.success(message); // ✅ Show backend message
        setLogoutResponse(result?.data?.data);

        // Optional: clear tokens/localStorage
        localStorage.clear();
        window.location.href = "/"; // Redirect to homepage
      }
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      toast.error(errorMsg);
    }
  };

  return { onLogout, logoutResponse };
};

export default useLogout;
