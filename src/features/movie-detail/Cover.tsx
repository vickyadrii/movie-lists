import { useMemo } from "react";
import dayjs from "dayjs";

import { addToFavorite } from "@/services/favoriteService";
import { addToWatchlist } from "@/services/watchlistService";
import { FavoriteRequest, Movie, MovieDetails, WatchlistRequest } from "@/types";

import iconFavoriteOutline from "@/assets/ic_favorite_outline.svg";
import iconBookmarkOutline from "@/assets/ic_bookmark_outline.svg";

type Props = {
  movie: MovieDetails;
};

const Cover = ({ movie }: Props) => {
  const baseImageUrl = import.meta.env.VITE_TBDB_BASE_IMAGE_URL;
  const backgroundCover = `${baseImageUrl}/${movie.backdrop_path}`;
  const poster = `${baseImageUrl}/${movie.poster_path}`;

  const renderGenres = useMemo(() => {
    return movie.genres?.map((data) => data.name).join(", ");
  }, [movie.genres]);

  const renderDuration = useMemo(() => {
    const runtime = movie.runtime ?? 0;
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }, [movie.runtime]);

  const handleAddToFavorite = async (data: Movie) => {
    const payload: FavoriteRequest = {
      media_type: "movie",
      media_id: data.id ?? 0,
      favorite: true,
    };
    try {
      const res = await addToFavorite(payload);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToWatchlist = async (data: Movie) => {
    const payload: WatchlistRequest = {
      media_type: "movie",
      media_id: data.id ?? 0,
      watchlist: true,
    };
    try {
      const res = await addToWatchlist(payload);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative lg:h-[400px] h-[650px]">
      <div className="absolute w-full">
        <div className="relative">
          <div className="bg-black/80 w-full lg:h-[400px] h-[650px] absolute" />
          <img src={backgroundCover} alt="backdrop_path" className="w-full lg:h-[400px] h-[650px] object-cover " />
        </div>
      </div>
      <div className="relative max-w-[1360px] mx-auto p-5 flex md:items-center z-10 md:h-full">
        <div className="flex md:flex-row flex-col md:items-center gap-5">
          <img src={poster} alt="poster_path" className="md:w-[200px] w-60 md:h-[300px] h-80 object-cover rounded-md" />
          <div className="flex flex-col gap-5">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <h2 className="md:text-3xl text-xl font-semibold">{movie.title}</h2>
              <span className="md:text-sm text-xs font-roboto">
                {dayjs(movie.release_date).format("DD/MM/YYYY")} • {renderGenres} • {renderDuration}
              </span>
            </div>

            {/* Bookmark and Favorite Buttons */}
            <div className="flex items-center gap-[10px]">
              <button onClick={() => handleAddToWatchlist(movie)}>
                <img src={iconBookmarkOutline} alt="ic_bookmark" />
              </button>
              <button onClick={() => handleAddToFavorite(movie)}>
                <img src={iconFavoriteOutline} alt="ic_bookmark" />
              </button>
            </div>

            {/* Tagline and Overview */}
            <div className="flex flex-col gap-[10px]">
              <span className="md:text-sm text-xs italic font-roboto">{movie.tagline}</span>
              <div className="flex flex-col gap-1">
                <p className="md:text-sm text-xs font-bold">Overview</p>
                <span className="md:text-sm text-xs font-roboto">{movie.overview}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
