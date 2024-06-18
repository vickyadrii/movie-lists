import { useEffect, useState } from "react";

import { Movie } from "@/types";

import Spin from "@/components/ui/spin";
import ListTitle from "@/components/movie/ListTitle";
import MovieLists from "@/components/movie/MovieLists";
import { getWatchlist } from "@/services/watchlistService";

const Watchlist = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([]);

  const handleGetWatchlist = async () => {
    setIsLoading(true);

    try {
      const res = await getWatchlist();
      setWatchlistMovies(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Watchlist page | Technical Test Seryu Cargo";
    handleGetWatchlist();
  }, []);

  return (
    <div className="space-y-6">
      <ListTitle title="Your Watchlist" />

      <Spin spinning={isLoading}>
        {watchlistMovies.length !== 0 || isLoading ? (
          <MovieLists movies={watchlistMovies} />
        ) : (
          <span className="text-lg font-semibold">No Data</span>
        )}
      </Spin>
    </div>
  );
};

export default Watchlist;
