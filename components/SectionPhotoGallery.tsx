"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "simplelightbox/dist/simple-lightbox.css"; // Import styles

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
  const [isMounted, setIsMounted] = useState(false);
  const [lightbox, setLightbox] = useState<any>(null); // Store SimpleLightbox instance

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let gallery: any;

    import("simplelightbox").then(({ default: SimpleLightbox }) => {
      gallery = new SimpleLightbox(".swiper-slide a", {
        captions: true,
        captionDelay: 250,
        captionSelector: "img",
        captionType: "attr",
        captionsData: "alt",
        close: true,
        nav: true,
        className: "sl-custom-styles",
      });

      setLightbox(gallery);
    });

    return () => {
      if (gallery) {
        gallery.destroy();
      }
    };
  }, [photos]);

  useEffect(() => {
    if (lightbox) {
      lightbox.refresh(); // Refresh when new images load
    }
  }, [photos]);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-large">
        <SectionHeading
          title="Explore more photos from 2024 Charity Dinner"
          subtitle="Witness the joy your support creates for children."
          className="max-w-[768px]"
        />
        <div className="spacer-medium"></div>
        {isMounted && (
          <Swiper
            slidesPerView={slidesCount}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              dynamicBullets: true, // Enables dynamic bullets
              dynamicMainBullets: 3, // Controls how many bullets remain visible
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            //         dynamicBullets: true, // Enables dynamic bullets
            // dynamicMainBullets: 3, // Controls how many bullets remain visible
            className="w-full"
            breakpoints={{
              320: { spaceBetween: 16 },
              768: { spaceBetween: 32 },
            }}
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <a href={photo.srcUrl}>
                  <img
                    src={photo.srcUrl}
                    alt={photo.alt}
                    className="image-corner"
                    loading="lazy"
                  />
                </a>
              </SwiperSlide>
            ))}
            {slidesCount > 1 && (
              <div className="container-large relative flex items-center justify-between pt-12">
                <div className="relative h-10">
                  <SwiperPagination />
                </div>
                <SwiperNavButtons />
              </div>
            )}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default SectionPhotoGallery;
