"use client";
import { useState, useEffect } from "react";
import { endPoints } from "@/utils/endpoints";
import axiosHttp from "@/utils/axioshttp";

const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const response = await axiosHttp.get(endPoints.announcements);

        if (response.status === 200 && response.data?.data) {
          setAnnouncements(response.data.data);
        } else {
          setError("Failed to fetch announcements");
        }
      } catch (err) {
        setError(err.message || "Error fetching announcements");
        console.error("Error fetching announcements:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return { announcements, loading, error };
};

export default useAnnouncements;
