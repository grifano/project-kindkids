"use client";

import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import aditional modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import { SwiperNavButtons } from "./SwiperNavButtons";
import SwiperPagination from "./SwiperPagination";

const SectionPhotoGallery = ({ photos }: { photos: EventPhoto[] }) => {
  const slidesCount = 1.5;
  return (
    <section className="section-padding overflow-hidden">
      {/* <div className="gradient-white-overlay pointer-events-none absolute right-0 top-0 z-40 h-full lg:w-[50%]"></div> */}
      <div className="container-large">
        <SectionHeading
          title="Explore more photo from Charity Dinner"
          subtitle="Witness the joy your support creates for children."
          className="max-w-[768px]"
        />
        <div className="spacer-medium"></div>
        <Swiper
          slidesPerView={slidesCount}
          spaceBetween={32}
          pagination={{ el: ".custom-pagination", clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {photos.map((photo) => {
            return (
              <SwiperSlide key={photo.id}>
                <Image
                  src={photo.srcUrl}
                  alt={photo.alt}
                  width={1280}
                  height={720}
                  className="image-corner"
                />
              </SwiperSlide>
            );
          })}

          {slidesCount > 1 && (
            <div className="container-large relative flex items-center justify-between pt-12">
              <SwiperPagination />
              <SwiperNavButtons />
            </div>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionPhotoGallery;
