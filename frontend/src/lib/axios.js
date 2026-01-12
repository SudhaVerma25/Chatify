import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
  baseURL: "https://chatify-backend-ov8j.onrender.com /api",
  withCredentials: true,
});
