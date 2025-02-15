import Image from "next/image";
import React, { FC } from "react";

interface InitiativeCardProps {
  imageSrc: string;
  title: string;
  text: string;
  variant?: "blue" | "purple";
}

const InitiativeCard: FC<InitiativeCardProps> = ({
  imageSrc,
  title,
  text,
  variant = "blue",
}) => {
  const fileName =
    imageSrc.match(/([^/]+)(?=\.\w+$)/)?.[0] || "initiative-image";

  return (
    <div
      className={`flex min-h-full w-full flex-col items-center justify-start gap-6 rounded-lg border-2 ${variant === "blue" ? "border-primary-lightBlue" : ""} ${variant === "purple" ? "border-primary-purple" : ""} bg-white p-5 text-center shadow-xxlarge`}
    >
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
