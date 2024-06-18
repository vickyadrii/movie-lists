import { Link } from "react-router-dom";

import { Movie } from "@/types";

import dayjs from "dayjs";

type Props = {
  movies: Movie[];
};

const MovieLists = ({ movies }: Props) => {
  const baseImageUrl = import.meta.env.VITE_TBDB_BASE_IMAGE_URL;

  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-[28px]">
      {movies.map((movie) => (
        <Link to={sessionId ? `/${movie.id}` : "/"} key={movie.id} className={`${!sessionId ? "cursor-default" : ""}`}>
          <div>
            <img src={`${baseImageUrl}/${movie.poster_path}`} alt="" className="rounded-md" />
          </div>
          <div className="font-inter p-[15px] flex flex-col">
            <h3 className="md:text-lg text-[#B6B6B6] md:font-bold font-semibold line-clamp-1">{movie.title}</h3>
            <p className="text-xs text-[#828282]">{dayjs(movie.release_date).format("YYYY")}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieLists;
