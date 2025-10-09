import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useGetAddress = () => {
  const [coupons, setCoupons] = useState([]);

  const getAddress = async () => {
    try {
      const endPoint = `${endPoints.getAddress}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setCoupons(result?.data?.data);
      }
    } catch (err) {
      //error.resposne.data.message
    }
  };

  useEffect(() => {
    getCoupon();
  }, []);
  return coupons;
};

export default useGetAddress;
