"use client";

import { BiChevronRight } from "react-icons/bi";
import React, { useState } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "link"
  | "bluePrimary"
  | "blueSecondary";

interface ButtonProps {
  url?: string;
  label: string;
  variant: ButtonVariant;
  className?: string;
  secure?: boolean;
  stripe?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  url,
  label,
  variant,
  className,
  secure,
  stripe,
}) => {
  const baseStyles =
    "inline-flex h-12 items-center  justify-center gap-2 rounded-full font-bold transition-all  hover:saturate-150";
  const variants = {
    primary: "bg-primary-purple text-white px-6 py-3 cursor-pointer",
    bluePrimary: "bg-primary-lightBlue text-white px-6 py-3",
    secondary:
      "border-2 border-primary-purple text-primary-purple hover:bg-primary-lightPurple transition-colors px-6 py-3",
    link: "hover:underline",
    blueSecondary:
      "border-2 border-primary-lightBlue text-primary-lightBlue hover:bg-primary-lightBlue hover:text-white transition-colors px-6 py-3",
  };

  // Stripe: Checkout button
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const { url } = await res.json();
    window.location.href = url; // Redirect to Stripe Checkout
  };

  return (
    <>
      {stripe ? (
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`${baseStyles} ${variants[variant] || variants.primary} ${className || ""}`}
        >
          {loading ? "Processing..." : label}
        </button>
      ) : (
        <a
          href={url}
          className={`${baseStyles} ${variants[variant] || variants.primary} ${className || ""}`}
          {...(secure ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label} {variant === "link" ? <BiChevronRight /> : ""}
        </a>
      )}
    </>
  );
};

export default Button;
