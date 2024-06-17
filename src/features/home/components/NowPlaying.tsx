import { useCallback, useEffect, useState } from "react";

import { Movie } from "@/types";
import { getNowPlaying } from "@/services/MovieListsService";

import ListTitle from "@/components/movie/ListTitle";
import SliderMovieLists from "@/components/movie/SliderMovieLists";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const getNowPlayingMovies = useCallback(async () => {
    try {
      const res = await getNowPlaying();
      setMovies(res.data.results);
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
      <SliderMovieLists slides={movies} />
    </div>
  );
};

export default NowPlaying;
