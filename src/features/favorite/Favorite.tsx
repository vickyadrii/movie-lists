import { useEffect, useState } from "react";

import { Movie } from "@/types";
import ListTitle from "@/components/movie/ListTitle";
import { getFavorite } from "@/services/favoriteService";
import MovieLists from "@/components/movie/MovieLists";

const Favorite = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const handleGetFavorite = async () => {
    try {
      const res = await getFavorite();
      setFavoriteMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Favorite page | Technical Test Seryu Cargo";
    handleGetFavorite();
  }, []);

  return (
    <div className="space-y-6">
      <ListTitle title="Your Favorite" />

      <MovieLists movies={favoriteMovies} />
    </div>
  );
};

export default Favorite;
