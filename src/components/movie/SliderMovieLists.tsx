import { FavoriteRequest, Movie, WatchlistRequest } from "@/types";

import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";

import { addToFavorite } from "@/services/favoriteService";
import { addToWatchlist } from "@/services/watchlistService";

// import iconBookmark from "@/assets/ic_bookmark.svg";
// import iconFavorite from "@/assets/ic_favorite.svg";
import iconFavoriteOutline from "@/assets/ic_favorite_outline.svg";
import iconBookmarkOutline from "@/assets/ic_bookmark_outline.svg";

export type Props = {
  slides: Movie[];
};

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  680: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
  1080: {
    slidesPerView: 6.5,
    spaceBetween: 28,
  },
};

const SliderMovieLists = ({ slides }: Props) => {
  const baseImageUrl = import.meta.env.VITE_TBDB_BASE_IMAGE_URL;

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
    <Swiper modules={[Scrollbar, A11y]} scrollbar={{ draggable: true }} breakpoints={breakpoints}>
      {slides.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="relative">
            <div className="absolute bottom-[10px] right-[10px]">
              <div className="flex items-center gap-[10px]">
                <button onClick={() => handleAddToWatchlist(movie)}>
                  <img src={iconBookmarkOutline} alt="ic_bookmark" />
                </button>
                <button onClick={() => handleAddToFavorite(movie)}>
                  <img src={iconFavoriteOutline} alt="ic_bookmark" />
                </button>
              </div>
            </div>
            <img src={`${baseImageUrl}/${movie.poster_path}`} alt="" className="rounded-md" />
          </div>
          <div className="font-inter p-[15px] flex flex-col">
            <h3 className="md:text-lg text-[#B6B6B6] md:font-bold font-semibold line-clamp-1">{movie.title}</h3>
            <p className="text-xs text-[#828282]">{dayjs(movie.release_date).format("YYYY")}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderMovieLists;