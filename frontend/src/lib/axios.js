import axios from "axios";

BASE_URL = import.meta.env.VITE_BACKEND_URL;
cexport const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api",
  withCredentials: true,
});

