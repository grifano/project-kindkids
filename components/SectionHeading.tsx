import { title } from "process";
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  alignment?: "text-center";
  color?: "text-primary-purple" | "text-white";
  maxWidth?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  alignment,
  color,
  maxWidth,
}: SectionHeadingProps) => {
  return (
    <div
      className={`${alignment} ${color} m-auto flex ${maxWidth} flex-col gap-6`}
    >
      {eyebrow && (
        <p className="font-medium uppercase tracking-wider">{eyebrow}</p>
      )}
      <h2 className="font-lora text-[2rem] font-medium leading-tight md:text-[3rem]">
        {title}
      </h2>
      <p className="text-2xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
