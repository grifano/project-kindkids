import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex items-center gap-2">
      <button
        className="flex-center flex h-10 w-10 cursor-pointer rounded-full border-2 border-primary-purple bg-white text-primary-purple transition-colors hover:bg-primary-purple hover:text-white"
        onClick={() => swiper.slidePrev()}
      >
        <BiChevronLeft />
      </button>
      <button
        className="flex-center flex h-10 w-10 cursor-pointer rounded-full border-2 border-primary-purple bg-white text-primary-purple transition-colors hover:bg-primary-purple hover:text-white"
        onClick={() => swiper.slideNext()}
      >
        <BiChevronRight />
      </button>
    </div>
  );
};
