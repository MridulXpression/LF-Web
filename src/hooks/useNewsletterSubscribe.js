import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import toast from "react-hot-toast";

const useNewsletterSubscribe = () => {
  const subscribeToNewsletter = async (email) => {
    try {
      const endPoint = `${endPoints.newsletter}`;
      const payload = {
        email: email,
      };
      const result = await axiosHttp.post(endPoint, payload);
      if (result?.status === 201) {
        toast.success(
          result?.data?.message || "Successfully subscribed to our newsletter!"
        );
        return true;
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to subscribe");
      return false;
    }
  };

  return { subscribeToNewsletter };
};

export default useNewsletterSubscribe;
