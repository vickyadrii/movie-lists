import { useEffect, useState } from "react";

import { Movie } from "@/types";
import ListTitle from "@/components/movie/ListTitle";
import { getFavorite } from "@/services/favoriteService";
import MovieLists from "@/components/movie/MovieLists";
import Spin from "@/components/ui/spin";

const Favorite = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const handleGetFavorite = async () => {
    setIsLoading(true);

    try {
      const res = await getFavorite();
      setFavoriteMovies(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Favorite page | Technical Test Seryu Cargo";
    handleGetFavorite();
  }, []);

  return (
    <div className="space-y-6">
      <ListTitle title="Your Favorite" />

      <Spin spinning={isLoading}>
        {favoriteMovies.length !== 0 || isLoading ? (
          <MovieLists movies={favoriteMovies} />
        ) : (
          <span className="text-lg font-semibold">No Data</span>
        )}
      </Spin>
    </div>
  );
};

export default Favorite;
