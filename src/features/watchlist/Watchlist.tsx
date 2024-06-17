import { useEffect, useState } from "react";

import dayjs from "dayjs";

import { Movie } from "@/types";
import ListTitle from "@/components/common/ListTitle";
import { getWatchlist } from "@/services/watchlistService";

const Watchlist = () => {
  const baseImageUrl = import.meta.env.VITE_TBDB_BASE_IMAGE_URL;

  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([]);

  const handleGetWatchlist = async () => {
    try {
      const res = await getWatchlist();
      setWatchlistMovies(res.data.results);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Watchlist page | Technical Test Seryu Cargo";
    handleGetWatchlist();
  }, []);

  return (
    <div className="space-y-6">
      <ListTitle title="Your Watchlist" />

      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-[28px]">
        {watchlistMovies.map((movie) => (
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

export default Watchlist;
