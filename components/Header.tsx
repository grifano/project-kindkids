"use client";

import Image from "next/image";
import Button from "./Button";
import { menuLinks, getInvolved } from "@/constants/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import BuyTicketButton from "./BuyTicketButton";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 991);
    }
  }, []);

  // Mobile Menu State Control
  const handleMenuOpen = () => {
    setIsActive(!isActive);
  };
  const handleLinkClick = () => {
    setIsActive(false);
  };

  // Dropdown State Control
  // Open dropdown on hover
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  // Close dropdown when mouse leaves
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  // Close the menu by clicking a link
  const handleDropdownCloseAtMobile = () => {
    if (isMobile) {
      handleLinkClick();
    } else {
      handleDropdownClose();
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed z-50 w-full rounded-b-lg bg-primary-deepBlue py-2">
      <div className="container-large flex items-center justify-between gap-8">
        {/* Main Logo */}
        <a
          href="/"
          className="group relative -ml-3 flex items-center rounded-lg p-3 text-2xl font-bold"
        >
          <div className="absolute bottom-0 left-0 -z-10 h-full w-[110%] rounded-full bg-action-headerHover opacity-0 transition-opacity group-hover:opacity-90"></div>
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
            {/* Header Menu */}
            {menuLinks.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    onClick={handleLinkClick}
                    href={item.href}
                    className="menu-link"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {/* Dropdown "Get Involved" */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              <button className="menu-link hidden items-center gap-2 lg:flex">
                {getInvolved.name}
                <div className={`${isDropdownOpen ? "rotate-180" : ""}`}>
                  <BiChevronDown />
                </div>
              </button>
              <ul className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
                {getInvolved.links.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link
                        className="block w-full px-3 py-2 text-right text-2xl font-semibold leading-none text-white lg:text-left lg:text-base lg:font-medium lg:text-primary-deepBlue lg:transition-colors lg:hover:text-primary-purple"
                        onClick={handleDropdownCloseAtMobile}
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <div className="ml-auto flex gap-2 pt-8 lg:p-0">
            <Button label="Buy a ticket" variant="bluePrimary" stripe />
            <Button label="Donate Now" variant="blueSecondary" stripe />
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
