import { api } from "@/configs";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const getNowPlaying = () => {
  return api.get(`/movie/now_playing?api_key=${apiKey}`);
};

export const getTopRated = () => {
  return api.get(`/movie/top_rated?api_key=${apiKey}`);
};
