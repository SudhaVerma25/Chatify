import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.https://chatify-0xsv.onrender.com,
  withCredentials: true,
});
