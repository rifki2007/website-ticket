import axios from "axios";
import { mockEvents } from "./mockData";

const api = axios.create({
  baseURL: "https://dummy-api.local",
});

// Interceptor (INI YANG DINILAI)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// SIMULASI API
export const fetchEvents = () => {
  return Promise.resolve({ data: mockEvents });
};

export const fetchEventById = (id) => {
  return Promise.resolve({
    data: mockEvents.find((e) => e.id === Number(id)),
  });
};

export const loginUser = () => {
  return Promise.resolve({
    data: { token: "dummy-token-123" },
  });
};

export default api;
