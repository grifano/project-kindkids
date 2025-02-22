import { title } from "process";
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`${className} flex flex-col gap-6`}>
      {eyebrow && (
        <p className="font-medium uppercase tracking-wider">{eyebrow}</p>
      )}
      <h2 className="font-lora text-[2rem] font-medium leading-tight md:text-[3rem]">
        {title}
      </h2>
      <p className="md:text-2xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
