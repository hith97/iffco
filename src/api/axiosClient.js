// src/api/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("Axios Base URL:", axiosClient.defaults.baseURL); // Debug log

export default axiosClient;
