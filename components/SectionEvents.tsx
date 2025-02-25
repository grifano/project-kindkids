"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import aditional modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EventCard from "./EventCard";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Button from "./Button";
import { SwiperNavButtons } from "./SwiperNavButtons";
import SwiperPagination from "./SwiperPagination";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const SectionEvents = () => {
  const slidesCount = 1;
  return (
    <section id="events" className="section-padding overflow-hidden">
      {/* <div className="gradient-white-overlay pointer-events-none absolute right-0 top-0 z-40 h-full lg:w-[50%]"></div> */}
      <div className="container-large">
        <SectionHeading
          eyebrow="Upcoming and Past Events"
          title="Uniting Through Events for a Greater Cause"
          subtitle="Explore our charity events that bring communities together to create lasting impact. From elegant dinners to inspiring art showcases, each event helps support children with disabilities in Ukraine. Be part of the change."
          className="max-w-[768px]"
        />
        <div className="spacer-medium"></div>
        <div className="relative flex flex-col gap-12 lg:flex-row">
          {/* Feature Event */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-primary-purple shadow-xxlarge">
            {/* Feature Event Top Content */}
            <div className="relative left-0 top-0 z-20 flex h-full flex-col p-5 text-white">
              {/* Event Year */}
              <div className="flex flex-wrap items-baseline gap-2 leading-tight">
                <p className="font-lora text-[3.5rem] font-bold">2025</p>
                <p className="text-[2.5rem] font-medium">Coming Up</p>
              </div>

              {/* Event Schedule */}
              <p className="max-sm:max-w-[80%]">
                Wednesday April 23 2025 at 6:00pm - 400CAD
              </p>

              {/* Event Location */}
              <p className="mb-20 mt-3 font-medium">
                “Vancuver Club” <br /> 915 W Hastings St. <br />
                Vancouver, Canada
              </p>

              {/* Event Title */}
              <h3 className="title-h3 mt-auto">
                Join Us for an Evening of Hope and Generosity
              </h3>

              {/* Event Subtitle */}
              <p className="mt-2">
                Save the date for our 2025 charity dinner! Enjoy an
                unforgettable night of fine dining, inspiring art, and heartfelt
                giving as we come together to support children with disabilities
                in Ukraine. Your presence makes a difference.
              </p>

              {/* Event Action */}
              <div className="mt-4 flex items-center gap-6">
                <Button variant="primary" label="Buy a ticket" url="/404" />
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full font-bold text-white transition-all hover:underline hover:saturate-150"
                  href="/event/2025"
                >
                  Learn more <BiChevronRight />
                </Link>
              </div>
            </div>

            {/* Feature Event Top Image */}
            <div className="dark-overlay"></div>
            <Image
              src="/images/section-hero/god-mother-art.jpg"
              alt="Event 2025"
              width={624}
              height={624}
              className="absolute left-0 top-0 h-full w-full object-cover"
            />
          </div>
          {/* Past Events */}
          <div className="sm:min-w-[25rem] md:max-w-[50%]">
            <Swiper
              slidesPerView={slidesCount}
              spaceBetween={32}
              pagination={{ el: ".custom-pagination", clickable: true }}
              modules={[Pagination]}
              className="w-full"
            >
              <SwiperSlide>
                <EventCard
                  id=""
                  year="2024"
                  schedule="Thursday, May 9th at 6pm"
                  location={
                    <>
                      “The Mark” <br />
                      1372 Seymour Str. <br />
                      Vancouver, Canada
                    </>
                  }
                  imageUrl="/images/section-events/event-2024-cover.jpg"
                  title="Charity Event: A Night of Art and Fine Dining in Support of Ukrainian
                    Children with Disabilities"
                  text="Discover how our charity dinner brought together art, fine dining, and
                    a compassionate community to support children with disabilities in
                    Ukraine. Join us in making an impact."
                />
              </SwiperSlide>
              {slidesCount > 1 && (
                <div className="container-large relative flex items-center justify-between pt-12">
                  <SwiperPagination />
                  <SwiperNavButtons />
                </div>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEvents;
