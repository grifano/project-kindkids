import Image from "next/image";
import React, { FC } from "react";
import CountdownTimer from "./CountdownTimer";
import CTAButtons from "./CTAButtons";
import { FaLocationDot } from "react-icons/fa6";

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
            <div>
              <a
                href="https://maps.app.goo.gl/uqPL1f6Josk8r5AV6?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Google Maps directions in a new tab"
                title="View directions on Google Maps"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white p-4 text-lg font-semibold transition-colors hover:bg-action-whiteBtnHover"
              >
                <FaLocationDot />
                <span>View on Google Maps</span>
              </a>
            </div>
            {!isPast && <CountdownTimer />}
            {!isPast && (
              <div className="mt-8 flex justify-center gap-2 font-quicksandSans">
                <CTAButtons hasBayTicketBtn hasDonateBtn />
              </div>
            )}
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
