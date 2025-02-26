import React, { FC } from "react";
import Button from "./Button";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

interface EventCardProps {
  id: string;
  year: string;
  schedule: string;
  location: React.ReactNode;
  imageUrl: string;
  title: string;
  text: string;
}

const EventCard: FC<EventCardProps> = ({
  id,
  year,
  schedule,
  location,
  imageUrl,
  title,
  text,
}) => {
  return (
    <div className="rounded-large border-2 border-primary-purple bg-white p-5">
      {/* EventCard Top Image */}
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
        <div className="dark-overlay"></div>
        <Image
          src={imageUrl}
          alt="Event 2024"
          width={350}
          height={197}
          layout="responsive"
        />
        <div className="absolute left-0 top-0 z-20 h-full w-full p-5 text-white">
          <p className="text-[2.5rem] font-bold leading-tight">{year}</p>
          <p>{schedule}</p>
          <p className="mt-3">{location}</p>
        </div>
      </div>
      {/* EventCard Content */}
      <div className="mt-6">
        <h3 className="title-h3">{title}</h3>
        <p className="mt-2">{text}</p>
        <div className="flex justify-end">
          <Link
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full font-bold text-primary-purple transition-all hover:underline hover:saturate-150"
            href="/event/2024"
          >
            Learn more <BiChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
