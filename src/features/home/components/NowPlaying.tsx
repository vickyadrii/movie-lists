import { useCallback, useEffect, useState } from "react";

import { api } from "@/configs";
import { Movie } from "@/types";
import Slider from "./Slider";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handleGetListMovies = useCallback(async () => {
    try {
      const res = await api.get(`/list/1?api_key=${apiKey}`);
      console.log(res.data.results);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [apiKey]);

  useEffect(() => {
    handleGetListMovies();
  }, [handleGetListMovies]);

  return (
    <div>
      <div className="space-y-6">
        <h1 className="lg:text-5xl text-3xl font-semibold">Now Playing</h1>
        <Slider slides={movies} />
      </div>
      <div>
        <p>test</p>
      </div>
    </div>
  );
};

export default NowPlaying;
