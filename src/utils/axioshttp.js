import axios from "axios";
import { store } from "@/redux/store"; // import your Redux store

const axiosHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosHttp.interceptors.request.use(
  (config) => {
    // Access state directly from store
    const state = store.getState();

    const token = state.user?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosHttp;
