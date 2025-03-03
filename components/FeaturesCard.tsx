import Image from "next/image";
import React, { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

interface FeaturesCardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const FeaturesCard: FC<FeaturesCardProps> = ({ imageSrc, title, text }) => {
  const fileName =
    imageSrc.match(/([^/]+)(?=\.\w+$)/)?.[0] || "initiative-image";

  return (
    <div className="group flex min-h-full w-full flex-col items-start justify-start gap-6 rounded-xl border-2 border-primary-purple bg-white p-5 shadow-xxlarge md:rounded-3xl lg:transition-colors">
      <Image
        src={imageSrc}
        alt={`${fileName.replace(/[-_]/g, " ")} ilustraton`}
        width={120}
        height={120}
      />
      <h3 className="title-h3">{title}</h3>
      <p className="font-base leading-normal">{text}</p>
    </div>
    // <Link
    //   href="/404"
    //   className="group flex min-h-full w-full flex-col items-start justify-start gap-6 rounded-xl border-2 border-primary-purple bg-white p-5 shadow-xxlarge md:rounded-3xl lg:transition-colors lg:hover:bg-primary-purple lg:hover:text-white"
    // >
    //   <Image
    //     src={imageSrc}
    //     alt={`${fileName.replace(/[-_]/g, " ")} ilustraton`}
    //     width={120}
    //     height={120}
    //   />
    //   <h3 className="title-h3">{title}</h3>
    //   <p className="font-base leading-normal">{text}</p>
    //   <p className="mt-auto inline-flex items-center gap-2 font-bold">
    //     See details <BiChevronRight />
    //   </p>
    // </Link>
  );
};

export default FeaturesCard;
