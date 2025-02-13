import { BiChevronRight } from "react-icons/bi";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "link"
  | "bluePrimary"
  | "blueSecondary";

interface ButtonProps {
  url: string;
  label: string;
  variant: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ url, label, variant, className }) => {
  const baseStyles =
    "inline-flex h-12 items-center justify-center gap-2 rounded-small px-6 py-3 font-bold opacity-90 transition-opacity hover:opacity-100";
  const variants = {
    primary: "bg-primary-purple text-white",
    bluePrimary: "bg-primary-lightBlue text-white",
    secondary:
      "border-2 border-primary-purple text-primary-purple hover:bg-primary-lightPurple transition-colors",
    link: "hover:underline ",
    blueSecondary:
      "border-2 border-primary-lightBlue text-primary-lightBlue hover:bg-action-headerHover transition-colors",
  };

  return (
    <a
      href={url}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {label} {variant === "link" ? <BiChevronRight /> : ""}
    </a>
  );
};

export default Button;
