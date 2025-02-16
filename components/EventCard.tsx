import React, { FC } from "react";
import Button from "./Button";
import Image from "next/image";
import { title } from "process";

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
      <div className="relative overflow-hidden rounded-2xl">
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
          <Button
            label="Learn more"
            variant="link"
            url="/404"
            className="mt-6 text-primary-purple"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
