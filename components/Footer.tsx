import { footerNav } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date();

  return (
    <footer className="bg-primary-deepBlue py-10 lg:py-20">
      <div className="container-large">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
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

          {/* Nav */}
          <nav>
            <ul className="flex flex-col md:flex-row">
              {footerNav.map((item) => {
                return (
                  <li key={item.name} className="flex justify-center">
                    <Link
                      className="px-3 py-2 font-semibold text-white transition-colors hover:text-primary-lightBlue"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social */}
          <ul className="flex text-white">
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="block h-8 w-8 p-2 transition-colors hover:text-primary-lightBlue"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.tiktok.com"
                aria-label="TikTok"
                className="block h-8 w-8 p-2 transition-colors hover:text-primary-lightBlue"
              >
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="block h-8 w-8 p-2 transition-colors hover:text-primary-lightBlue"
              >
                <FaFacebook />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-3 h-[1px] w-full rounded-full bg-primary-beige lg:mb-8 lg:mt-6"></div>
        <div className="flex-center flex flex-col gap-4 text-white md:flex-row">
          <p>{`© ${currentYear.getFullYear()} KindKids Charity. All rights reserved.`}</p>
          <Link
            href="/404"
            className="underline transition-colors hover:text-primary-lightBlue"
          >
            Privacy Policy
          </Link>
          <Link
            href="/404"
            className="underline transition-colors hover:text-primary-lightBlue"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
