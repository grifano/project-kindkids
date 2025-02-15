"use client";

import Image from "next/image";
import Button from "./Button";
import { headerNav } from "@/constants/navigation";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuOpen = () => {
    setIsActive(!isActive);
  };
  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <header className="fixed z-50 w-full rounded-b-lg bg-primary-deepBlue py-2">
      <div className="container-large flex items-center justify-between gap-8">
        {/* Main Logo */}
        <a
          href="/"
          className="group relative -ml-3 flex items-center rounded-lg p-3 text-2xl font-bold"
        >
          <div className="bg-action-headerHover absolute bottom-0 left-0 -z-10 h-full w-[110%] rounded-full opacity-0 transition-opacity group-hover:opacity-90"></div>
          <Image
            src="/images/logo-icon.png"
            width={32}
            height={32}
            alt="KindKids Charity Events"
          />
          <span className="text-white">Kind</span>
          <span className="text-primary-lightBlue">Kids</span>
        </a>

        {/* Menu */}
        <div
          className={`lg:menu-desktop menu-mobile ${isActive ? "open" : ""}`}
        >
          <ul className="flex flex-col items-end gap-6 lg:flex-row lg:items-center lg:gap-1">
            {headerNav.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    onClick={handleLinkClick}
                    href={item.href}
                    className={`hover:bg-action-headerHover rounded-full px-3 py-2 text-2xl font-semibold leading-none text-white transition-colors lg:text-base ${item.current && "bg-action-headerHover"}`}
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
        <div
          className={`flex cursor-pointer items-center justify-center lg:hidden ${isActive ? "active" : ""}`}
          onClick={handleMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 200 200"
            className={`transition-transform duration-500 ease-in-out ${isActive ? "rotate-90" : ""}`}
          >
            <g strokeWidth="6.5" strokeLinecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#fff"
                className="origin-[36%_40%] transition-all duration-500 ease-in-out"
                style={
                  isActive
                    ? {
                        transform:
                          "translateX(9px) translateY(1px) rotate(45deg)",
                      }
                    : {}
                }
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#fff"
                className="transition-all duration-500 ease-in-out"
                style={
                  isActive
                    ? {
                        strokeDasharray: "225 299",
                        strokeDashoffset: "-72px",
                      }
                    : { strokeDasharray: "29 299" }
                }
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#fff"
                className="origin-[35%_63%] transition-all duration-500 ease-in-out"
                style={
                  isActive
                    ? {
                        transform:
                          "translateX(9px) translateY(1px) rotate(-45deg)",
                      }
                    : {}
                }
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#fff"
                className="transition-all duration-500 ease-in-out"
                style={
                  isActive
                    ? {
                        strokeDasharray: "225 299",
                        strokeDashoffset: "-72px",
                      }
                    : { strokeDasharray: "29 299" }
                }
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#fff"
                className="origin-[61%_52%] transition-all duration-500 ease-in-out"
                style={
                  isActive
                    ? {
                        transform:
                          "translateX(9px) translateY(1px) rotate(-45deg)",
                      }
                    : {}
                }
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#fff"
                className="origin-[62%_52%] transition-all duration-500 ease-in-out"
                style={
                  isActive
                    ? {
                        transform:
                          "translateX(9px) translateY(1px) rotate(45deg)",
                      }
                    : {}
                }
              />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
