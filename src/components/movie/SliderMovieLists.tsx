import { useState } from "react";
import { FavoriteRequest, Movie, WatchlistRequest } from "@/types";

import dayjs from "dayjs";
import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { addToFavorite } from "@/services/favoriteService";
import { addToWatchlist } from "@/services/watchlistService";

// import iconBookmark from "@/assets/ic_bookmark.svg";
// import iconFavorite from "@/assets/ic_favorite.svg";

import LoginModal from "./LoginModal";
import Spin from "@/components/ui/spin";
import { useToast } from "@/components/ui/toast-provider";
import iconFavoriteOutline from "@/assets/ic_favorite_outline.svg";
import iconBookmarkOutline from "@/assets/ic_bookmark_outline.svg";

export type Props = {
  slides: Movie[];
};

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
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
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const baseImageUrl = import.meta.env.VITE_TBDB_BASE_IMAGE_URL;
  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

  const handleAddToFavorite = async (data: Movie) => {
    if (!sessionId) {
      setShowModal(true);
    } else {
      setIsLoading(true);

      const payload: FavoriteRequest = {
        media_type: "movie",
        media_id: data?.id ?? 0,
        favorite: true,
      };

      try {
        const res = await addToFavorite(payload);
        addToast(res.data.status_message, "success");
      } catch (error) {
        addToast("Oops something went wrong!", "error");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAddToWatchlist = async (data: Movie) => {
    const payload: WatchlistRequest = {
      media_type: "movie",
      media_id: data?.id ?? 0,
      watchlist: true,
    };

    if (!sessionId) {
      setShowModal(true);
    } else {
      setIsLoading(true);

      try {
        const res = await addToWatchlist(payload);
        addToast(res.data.status_message, "success");
      } catch (error) {
        addToast("Oops something went wrong!", "error");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Spin spinning={isLoading}>
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
      </Spin>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default SliderMovieLists;
