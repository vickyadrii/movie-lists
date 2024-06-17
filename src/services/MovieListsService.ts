import { api } from "@/configs";

export const getNowPlaying = () => {
  return api.get("/movie/now_playing");
};

export const getTopRated = () => {
  return api.get("/movie/top_rated");
};
