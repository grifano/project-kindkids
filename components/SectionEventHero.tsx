// import { donatePayLink } from "@/constants/payments";
import Image from "next/image";
import React, { FC } from "react";
// import Button from "./Button";
// import CountdownTimer from "./CountdownTimer";

interface EventHero {
  caption: string;
  time?: string;
  location?: string;
  coverImage: string;
  coverAlt: string;
  isPast?: boolean;
}

const SectionEventHero: FC<EventHero> = ({
  caption,
  time,
  location,
  coverImage,
  coverAlt,
  isPast,
}) => {
  return (
    <section className="hero-pedding">
      <div className="container-large">
        <div className="image-corner relative flex items-end justify-center">
          <div className="gradient-black-overlay absolute left-0 top-0 z-20 h-full w-full backdrop-blur-sm"></div>
          <div className="relative z-40 flex flex-col gap-6 px-4 py-12 text-center font-lora text-white lg:py-[112px]">
            <p className="event-caption">{caption}</p>
            <p className={`event-time ${isPast ? "line-through" : ""}`}>
              {time}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: location || "" }}
              className="event-location"
            ></p>
            {/* {!isPast && <CountdownTimer />} */}
            {/* {!isPast && (
              <div className="mt-8 flex justify-center gap-2 font-quicksandSans">
                <Button
                  url={donatePayLink.url}
                  variant="primary"
                  label={donatePayLink.title}
                  secure
                />
                <Button variant="white" label="Learn more" url="/404" />
              </div>
            )} */}
          </div>
          <Image
            src={coverImage}
            alt={coverAlt}
            width={1312}
            height={768}
            className="absolute left-0 top-0 z-10 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEventHero;
