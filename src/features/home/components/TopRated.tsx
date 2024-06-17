import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";

import { Movie } from "@/types";
import { getTopRated } from "@/services/MovieListsService";

import ListTitle from "./ListTitle";

const TopRated = () => {
  const baseImageUrl = import.meta.env.VITE_TBDB_BASE_IMAGE_URL;

  const [movies, setMovies] = useState<Movie[]>([]);
  const getNowPlayingMovies = useCallback(async () => {
    try {
      const res = await getTopRated();
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
      <ListTitle title="Top Rated" />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-[28px]">
        {movies.map((movie) => (
          <div key={movie.id}>
            <div>
              <img src={`${baseImageUrl}/${movie.poster_path}`} alt="" className="rounded-md" />
            </div>
            <div className="font-inter p-[15px] flex flex-col">
              <h3 className="md:text-lg text-[#B6B6B6] md:font-bold font-semibold line-clamp-1">{movie.title}</h3>
              <p className="text-xs text-[#828282]">{dayjs(movie.release_date).format("YYYY")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
