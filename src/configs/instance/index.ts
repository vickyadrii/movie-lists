const baseUrl = import.meta.env.VITE_TBDB_API_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

import { getAccessToken } from "@/lib/authStorage";
// import { getAccessToken } from "@/lib/authStorage";
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// const bearerToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;

export const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAccessToken()}`,
  },
  params: {
    api_key: apiKey,
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
