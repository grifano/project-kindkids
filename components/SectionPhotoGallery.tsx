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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Wait for Swiper slides to be available in the DOM
    const observer = new MutationObserver(() => {
      const links = document.querySelectorAll(".swiper-slide a");
      if (links.length > 0) {
        observer.disconnect(); // Stop observing once elements are found
        const gallery = new SimpleLightbox(".swiper-slide a", {
          captions: true,
          captionDelay: 250,
          captionSelector: "img",
          captionType: "attr",
          captionsData: "alt",
          close: true,
          nav: true,
          className: "sl-custom-styles",
        });

        return () => {
          gallery.destroy(); // Cleanup
        };
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-large">
        <SectionHeading
          title="Explore more photo from Charity Dinner"
          subtitle="Witness the joy your support creates for children."
          className="max-w-[768px]"
        />
        <div className="spacer-medium"></div>
        {isMounted && (
          <Swiper
            slidesPerView={slidesCount}
            pagination={{ el: ".custom-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="w-full"
            breakpoints={{
              320: { spaceBetween: 16 },
              768: { spaceBetween: 32 },
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
            {slidesCount > 1 && (
              <div className="container-large relative flex items-center justify-between pt-12">
                <SwiperPagination />
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
