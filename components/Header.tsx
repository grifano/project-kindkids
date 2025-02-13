"use client";

import Image from "next/image";
import Button from "./Button";
import { menu } from "@/constants/header";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuOpen = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="fixed z-50 w-full rounded-b-lg bg-primary-deepBlue py-2">
      <div className="container-large flex items-center justify-between gap-8">
        {/* Main Logo */}
        <a
          href="/"
          className="hover:bg-action-headerHover -ml-3 rounded-lg p-3"
        >
          <Image
            src="/images/site-logo.svg"
            width={113}
            height={32}
            alt="KindKids Charity Events"
          />
        </a>

        {/* Menu */}
        <div
          className={`lg:menu-desktop menu-mobile ${isActive ? "open" : ""}`}
        >
          <ul className="flex flex-col items-end gap-6 lg:flex-row lg:items-center lg:gap-1">
            {menu.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`hover:bg-action-headerHover rounded-md px-3 py-2 text-2xl font-semibold leading-none text-white transition-colors lg:text-base ${item.current && "bg-action-headerHover"}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="ml-auto flex gap-2">
            <Button url="/" label="Buy a ticket" variant="bluePrimary" />
            <Button url="/" label="Donate Now" variant="blueSecondary" />
          </div>
        </div>

        {/* Burger Button */}
        <div className="lg:hidden">
          <BurgerButton onClick={handleMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
