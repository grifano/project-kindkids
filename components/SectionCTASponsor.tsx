import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Button from "./Button";

const SectionCTASponsor = () => {
  return (
    <section className="section-padding">
      <div className="container-large flex flex-col-reverse items-center justify-center text-center lg:grid lg:grid-cols-2 lg:text-left">
        <Image
          alt="Child draw"
          src="/images/section-CTASponsor/child-draw.svg"
          width={612}
          height={612}
          className="h-auto w-auto object-contain"
        />
        <div className="max-w-[768px] lg:max-w-max">
          <SectionHeading
            title="Become a Monthly Sponsor and Change Lives"
            subtitle="Your monthly support provides children with life-saving medication, nutritious food, and essential care. Choose a prewritten amount or set your own to make a consistent impact and bring hope to children in need. Together, we can ensure they receive the help they deserve every month."
          />
          <Button
            label="Become a sponsor"
            url="/404"
            variant="primary"
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCTASponsor;
