import { Movie } from "@/types";

import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";

export type Props = {
  slides: Movie[];
};

const Slider = ({ slides }: Props) => {
  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={28}
      slidesPerView={6.5}
      //   navigation
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="h-[305px]"
    >
      {slides.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="rounded-md" />
          <div className="font-inter p-[15px] max-w-full mx-auto">
            <h3 className="md:text-lg text-[#B6B6B6] md:font-bold font-semibold line-clamp-1">{movie.title}</h3>
            <p className="text-xs left text-[#828282]">{dayjs(movie.release_date).format("YYYY")}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
