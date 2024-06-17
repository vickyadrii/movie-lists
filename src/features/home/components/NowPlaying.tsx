import { useCallback, useEffect, useState } from "react";

import { Movie } from "@/types";
import { getNowPlaying } from "@/services/MovieListsService";

import Slider from "./Slider";
import ListTitle from "./ListTitle";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const getNowPlayingMovies = useCallback(async () => {
    try {
      const res = await getNowPlaying();
      setMovies(res.data.results);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  return (
    <div className="space-y-6">
      <ListTitle title="Now Playing" />
      <Slider slides={movies} />
    </div>
  );
};

export default NowPlaying;
