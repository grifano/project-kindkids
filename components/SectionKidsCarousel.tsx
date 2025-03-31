"use client";

import React, { useState, useEffect } from "react";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionHeading from "./SectionHeading";
import { SwiperNavButtons } from "./ui/SwiperNavButtons";
import SwiperPagination from "./ui/SwiperPagination";
import KidBigCard from "./KidBigCard";

const SectionPhotoGallery = ({ profiles }: { profiles: KidsProfile[] }) => {
  const [slidesCount, setSlidesCount] = useState(1.25);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setSlidesCount(2.5);
    }
    setIsMounted(true);
  }, []);

  return (
    <section className="section-padding">
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
            className="w-full"
            breakpoints={{
              320: { spaceBetween: 16 },
              768: { spaceBetween: 32 },
            }}
          >
            {profiles.map((profile) => (
              <SwiperSlide key={profile.id}>
                <KidBigCard kidProfile={profile} />
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
