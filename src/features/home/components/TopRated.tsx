import { useCallback, useEffect, useState } from "react";

import { Movie } from "@/types";
import { getTopRated } from "@/services/MovieListsService";

import Spin from "@/components/ui/spin";
import ListTitle from "@/components/movie/ListTitle";
import MovieLists from "@/components/movie/MovieLists";

const TopRated = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getNowPlayingMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await getTopRated();
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
      <ListTitle title="Top Rated" />
      <Spin spinning={isLoading}>
        {movies.length !== 0 || isLoading ? (
          <MovieLists movies={movies} />
        ) : (
          <span className="text-lg font-semibold">No Data</span>
        )}
      </Spin>
    </div>
  );
};

export default TopRated;
