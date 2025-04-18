"use client";

import { BiChevronRight } from "react-icons/bi";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "link"
  | "white"
  | "bluePrimary"
  | "blueSecondary";

interface ButtonProps {
  url?: string;
  label: string;
  variant: ButtonVariant;
  className?: string;
  secure?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  url,
  label,
  variant,
  className,
  secure,
  disabled,
  onClick,
}) => {
  const baseStyles =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full font-bold transition-all cursor-pointer hover:saturate-150";
  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const variants = {
    primary: "primary-bg-gradient text-white px-6 py-3",
    bluePrimary: "bg-primary-lightBlue text-white px-6 py-3",
    secondary:
      "border-2 border-primary-purple text-primary-purple hover:bg-primary-lightPurple transition-colors px-6 py-3",
    white:
      "border-2 border-white text-white hover:bg-action-whiteBtnHover transition-colors px-6 py-3",
    link: "hover:underline",
    blueSecondary:
      "border-2 border-primary-lightBlue text-primary-lightBlue hover:bg-action-whiteBtnHover transition-colors px-6 py-3",
  };

  if (url) {
    return (
      <a
        href={url}
        className={`${baseStyles} ${variants[variant] || variants.primary} ${className || ""} ${disabled ? disabledStyles : ""}`}
        {...(secure ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-disabled={disabled}
      >
        {label} {variant === "link" && <BiChevronRight />}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className || ""} ${disabled ? disabledStyles : ""}`}
      disabled={disabled}
    >
      {label} {variant === "link" && <BiChevronRight />}
    </button>
  );
};

export default Button;
