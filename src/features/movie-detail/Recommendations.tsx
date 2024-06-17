import { Movie } from "@/types";

import ListTitle from "@/components/movie/ListTitle";
import SliderMovieLists from "@/components/movie/SliderMovieLists";

type Props = {
  movies: Movie[];
};

const Recommendations = ({ movies }: Props) => {
  return (
    <div className="max-w-[1360px] mx-auto p-5 space-y-6">
      <ListTitle title="Recommendations" />
      <SliderMovieLists slides={movies} />
    </div>
  );
};

export default Recommendations;
