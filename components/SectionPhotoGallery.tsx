"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; // Import styles

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionHeading from "./SectionHeading";
import { SwiperNavButtons } from "./ui/SwiperNavButtons";
import SwiperPagination from "./ui/SwiperPagination";

const SectionPhotoGallery = ({ photos }: { photos: EventPhoto[] }) => {
  const slidesCount = 1.5;
  const [lightbox, setLightbox] = useState<SimpleLightbox | null>(null);

  useEffect(() => {
    const gallery = new SimpleLightbox(".swiper-slide a", {
      captions: true,
      captionDelay: 250,
      captionSelector: "img",
      captionType: "attr",
      captionsData: "alt",
      close: true,
      nav: true,
    });

    setLightbox(gallery);

    return () => {
      gallery.destroy(); // Clean up when component unmounts
    };
  }, []);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-large">
        <SectionHeading
          title="Explore more photo from Charity Dinner"
          subtitle="Witness the joy your support creates for children."
          className="max-w-[768px]"
        />
        <div className="spacer-medium"></div>
        <Swiper
          slidesPerView={slidesCount}
          pagination={{ el: ".custom-pagination", clickable: true }}
          modules={[Pagination]}
          className="w-full"
          breakpoints={{
            // when window width is >= 320px
            320: {
              spaceBetween: 16,
            },
            // when window width is >= 640px
            768: {
              spaceBetween: 32,
            },
          }}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <a href={photo.srcUrl}>
                <Image
                  src={photo.srcUrl}
                  alt={photo.alt}
                  width={1280}
                  height={720}
                  className="image-corner"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {slidesCount > 1 && (
          <div className="container-large relative flex items-center justify-between pt-12">
            <SwiperPagination />
            <SwiperNavButtons />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionPhotoGallery;
