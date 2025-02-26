import Image from "next/image";
import React, { FC } from "react";
import Button from "./Button";

interface InitiativeCardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const InitiativeCard: FC<InitiativeCardProps> = ({ imageSrc, title, text }) => {
  const fileName =
    imageSrc.match(/([^/]+)(?=\.\w+$)/)?.[0] || "initiative-image";

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-start gap-6 rounded-xl border-2 border-primary-lightBlue bg-white p-5 text-center shadow-xxlarge md:rounded-3xl">
      <Image
        src={imageSrc}
        alt={`${fileName.replace(/[-_]/g, " ")} ilustraton`}
        width={120}
        height={120}
      />
      <h3 className="title-h3">{title}</h3>
      <p className="font-base leading-normal">{text}</p>
    </div>
  );
};

export default InitiativeCard;
