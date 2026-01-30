import { useEffect, useState } from "react";
import axiosHttp from "@/utils/axioshttp";

const useHeroText = (superCatId) => {
  const [heroText, setHeroText] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getHeroText = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = { superCatId: superCatId === null ? "null" : superCatId };
      const result = await axiosHttp.get("/hero-text", { params });

      if (result?.status === 200) {
        setHeroText(result?.data?.data);
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Failed to load hero text";
      const errorStatus = err?.response?.data?.status || err?.response?.status;
      setError({ message: errorMessage, status: errorStatus });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHeroText();
  }, [superCatId]);

  return { heroText, loading, error, refetch: getHeroText };
};

export default useHeroText;
