import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.https://chatify-backend-ax08.onrender.com + "/api",
  withCredentials: true,
});
