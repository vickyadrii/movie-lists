import { useCallback, useEffect, useState } from "react";

import { api } from "@/configs";
import { Movie } from "@/types";

import TopRated from "./components/TopRated";
import NowPlaying from "./components/NowPlaying";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handleGetListMovies = useCallback(async () => {
    try {
      const res = await api.get(`/list/1?api_key=${apiKey}`);
      setMovies(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [apiKey]);

  useEffect(() => {
    handleGetListMovies();
  }, [handleGetListMovies]);

  useEffect(() => {
    document.title = "Home page | Technical Test Seryu Cargo";
  }, []);

  return (
    <div className="space-y-10">
      <NowPlaying />

      <TopRated movies={movies} />
    </div>
  );
};

export default Home;
