import { useCallback, useEffect, useState } from "react";

import { Movie } from "@/types";
import { getTopRated } from "@/services/MovieListsService";

import ListTitle from "@/components/movie/ListTitle";
import MovieLists from "@/components/movie/MovieLists";

const TopRated = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const getNowPlayingMovies = useCallback(async () => {
    try {
      const res = await getTopRated();
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
      <ListTitle title="Top Rated" />
      <MovieLists movies={movies} />
    </div>
  );
};

export default TopRated;
