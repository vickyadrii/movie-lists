import { useEffect, useState } from "react";

import { Movie } from "@/types";
import ListTitle from "@/components/movie/ListTitle";
import { getWatchlist } from "@/services/watchlistService";
import MovieLists from "@/components/movie/MovieLists";

const Watchlist = () => {
  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([]);

  const handleGetWatchlist = async () => {
    try {
      const res = await getWatchlist();
      setWatchlistMovies(res.data.results);
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

      <MovieLists movies={watchlistMovies} />
    </div>
  );
};

export default Watchlist;
