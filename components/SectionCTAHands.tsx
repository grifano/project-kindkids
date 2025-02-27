import React from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Image from "next/image";

const SectionCTAHands = () => {
  return (
    <section className="section-padding bg-primary-lightBlue max-lg:relative">
      <div className="container-large">
        <div className="items-center rounded-3xl lg:grid lg:grid-cols-2 lg:bg-white lg:shadow-xxlarge">
          <div className="left-1/2 top-1/2 w-full max-w-[768px] p-6 max-lg:absolute max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:text-center max-sm:static max-sm:translate-x-0 max-sm:translate-y-0 lg:p-12">
            <SectionHeading
              title="Keep the Impact Going – Support Our Cause"
              subtitle="Your generosity helps provide essential medical aid, food, and support for children in need. Every contribution makes a difference."
              className="text-primary-lightBlue"
            />
            <div className="mt-10 flex justify-center gap-2 lg:justify-start">
              <Button label="Buy a ticket" variant="bluePrimary" stripe />
              <Button label="Donate Now" variant="blueSecondary" stripe />
            </div>
          </div>
          <Image
            src="/images/SectionCTAHands/hands.png"
            alt="hands"
            width={656}
            height={437}
            layout="responsive"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCTAHands;
