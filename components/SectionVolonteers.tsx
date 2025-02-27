import volonteers from "@/constants/vonteers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeading from "./SectionHeading";

const SectionVolonteers = () => {
  return (
    <section className="section-padding bg-primary-lightPurple">
      <div className="container-large">
        <SectionHeading
          title="Gratitude to Our Volunteers & Partners"
          subtitle="This event wouldn’t have been possible without the dedication of our volunteers and generous sponsors. Their time, effort, and contributions ensured that every detail was perfect and that our mission reached those in need."
          className="max-w-[768px] text-primary-purple"
        />
        <div className="spacer-medium"></div>
        <ul className="grid gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {volonteers.map((volonteer) => {
            return (
              <li key={volonteer.name}>
                {/* Volonteer Card Top */}
                <div className="flex items-center gap-3">
                  <Image
                    src={volonteer.photoSrc}
                    alt={volonteer.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  {/* Volonteer Name and Title */}
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold leading-tight">
                      {volonteer.name}
                    </p>
                    <p className="text-sm italic">{volonteer.title}</p>
                  </div>
                </div>
                {/* Volonteer Bio */}
                <p className="mt-4 text-base">{volonteer.bio}</p>
                {/* Social Links */}
                <ul className="mt-4 flex gap-4">
                  {volonteer.social?.map((link) => {
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          aria-label={link.name}
                          className="group block h-6 w-6"
                        >
                          {
                            <link.icon className="h-full w-full text-primary-deepBlue transition-colors group-hover:hover:text-primary-purple" />
                          }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionVolonteers;
