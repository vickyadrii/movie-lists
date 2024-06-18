import { Movie } from "@/types";

import ListTitle from "@/components/movie/ListTitle";
import SliderMovieLists from "@/components/movie/SliderMovieLists";

type Props = {
  movies: Movie[];
  isLoading: boolean;
};

const Recommendations = ({ movies, isLoading }: Props) => {
  return (
    <div className="max-w-[1360px] mx-auto p-5 space-y-6">
      <ListTitle title="Recommendations" />

      {movies.length !== 0 || isLoading ? (
        <SliderMovieLists slides={movies} />
      ) : (
        <span className="text-lg font-semibold">No Data</span>
      )}
    </div>
  );
};

export default Recommendations;
