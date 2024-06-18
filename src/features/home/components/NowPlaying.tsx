import { useCallback, useEffect, useState } from "react";

import { Movie } from "@/types";
import { getNowPlaying } from "@/services/MovieListsService";

import Spin from "@/components/ui/spin";
import ListTitle from "@/components/movie/ListTitle";
import SliderMovieLists from "@/components/movie/SliderMovieLists";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getNowPlayingMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await getNowPlaying();
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  return (
    <div className="space-y-6">
      <ListTitle title="Now Playing" />
      <Spin spinning={isLoading}>
        {movies.length !== 0 || isLoading ? (
          <SliderMovieLists slides={movies} />
        ) : (
          <span className="text-lg font-semibold">No Data</span>
        )}
      </Spin>
    </div>
  );
};

export default NowPlaying;
