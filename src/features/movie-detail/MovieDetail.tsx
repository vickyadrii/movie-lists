import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie, getRecommendationMovies } from "@/services/MovieListsService";
import { Movie, MovieDetails } from "@/types";

import Cover from "./Cover";
import Recommendations from "./Recommendations";
import Spin from "@/components/ui/spin";

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const [movie, setMovie] = useState<MovieDetails>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommendationMovies, setRecommendationMovies] = useState<Movie[]>([]);

  const handleGetDetailsMovie = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await getDetailsMovie(movieId);
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const handleGetRecommendationMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await getRecommendationMovies(movieId);
      console.log(res.data);
      setRecommendationMovies(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    document.title = "Movie Detail page | Technical Test Seryu Cargo";
    handleGetDetailsMovie();
    handleGetRecommendationMovies();
  }, [handleGetDetailsMovie, handleGetRecommendationMovies]);

  return (
    <Spin spinning={isLoading}>
      <div className="space-y-10">
        <Cover movie={movie} />
        <Recommendations movies={recommendationMovies} isLoading={isLoading} />
      </div>
    </Spin>
  );
};

export default MovieDetail;
