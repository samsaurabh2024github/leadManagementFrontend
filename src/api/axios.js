import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || "http://localhost:5007/api",
   baseURL: import.meta.env.VITE_API_URL || "https://leadmanagementbackend2.onrender.com/api",
});

// Attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
