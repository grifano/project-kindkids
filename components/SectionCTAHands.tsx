import React from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Image from "next/image";

const SectionCTAHands = () => {
  return (
    <section className="section-padding">
      <div className="container-large">
        <div className="grid grid-cols-2">
          <div>
            <SectionHeading
              title="Keep the Impact Going – Support Our Cause"
              subtitle="Your generosity helps provide essential medical aid, food, and support for children in need. Every contribution makes a difference."
            />
            <div className="mt-10 flex justify-center gap-2 lg:justify-start">
              <Button variant="primary" label="Donate Now" url="/404" />
              <Button variant="secondary" label="Get Involved" url="/404" />
            </div>
          </div>
          <Image src={} alt="" width={656} height={437} layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export default SectionCTAHands;
