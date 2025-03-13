import React from "react";
import SectionHeading from "./SectionHeading";
import Button from "./ui/ButtonOld";
import Image from "next/image";
import { donatePayLink, ticketPayLink } from "@/constants/payments";
import CTAButtons from "./CTAButtons";

const SectionCTAHands = () => {
  return (
    <section className="section-padding bg-primary-lightBlue">
      <div className="container-large">
        <div className="items-center rounded-3xl bg-white max-lg:relative lg:grid lg:grid-cols-2 lg:shadow-xxlarge">
          <div className="left-1/2 top-1/2 w-full max-w-[768px] p-6 max-lg:absolute max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:text-center max-sm:static max-sm:translate-x-0 max-sm:translate-y-0 sm:bg-[#ffffff1a] sm:backdrop-blur-sm lg:p-12">
            <SectionHeading
              title="Keep the Impact Going – Support Our Cause"
              subtitle="Your generosity helps provide essential medical aid, food, and support for children in need. Every contribution makes a difference."
            />
            <div className="mt-10 flex justify-center gap-2 lg:justify-start">
              <CTAButtons hasBayTicketBtn hasDonateBtn>
                <Button label="Bay a Ticket" variant="bluePrimary" />
                <Button label="Donate Now" variant="blueSecondary" />
              </CTAButtons>
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
