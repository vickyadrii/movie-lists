import { api } from "@/configs";

export const getNowPlaying = () => {
  return api.get("/movie/now_playing");
};

export const getTopRated = () => {
  return api.get("/movie/top_rated");
};

export const getDetailsMovie = (movieId: number) => {
  return api.get(`/movie/${movieId}`);
};

export const getRecommendationMovies = (movieId: number) => {
  return api.get(`/movie/${movieId}/recommendations`);
};
