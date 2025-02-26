import React, { FC } from "react";
import Button from "./Button";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

interface SponsorCardProp {
  logo: string;
  title: string;
  subtitle: string;
  website: string;
}

const SponsorCard: FC<SponsorCardProp> = ({
  logo,
  title,
  subtitle,
  website,
}) => {
  return (
    <a
      className="group flex flex-col items-center text-center"
      href={website}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={logo}
        alt={title}
        width={600}
        height={427}
        className="image-corner border-2 border-black"
      />
      <h3 className="title-h3 mt-6">{title}</h3>
      <p className="mt-4 text-lg">{subtitle}</p>
      <div className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full font-bold transition-all lg:opacity-50 lg:group-hover:underline lg:group-hover:opacity-100">
        Visit website <BiChevronRight />
      </div>
    </a>
  );
};

export default SponsorCard;
