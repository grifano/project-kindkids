import React from "react";
import Button from "./ui/ButtonOld";
import SectionHeading from "./SectionHeading";
import FeaturesCard from "./FeaturesCard";
import { donatePayLink, ticketPayLink } from "@/constants/payments";
import CTAButtons from "./CTAButtons";

const SectionFeatures = () => {
  return (
    <section className="section-padding bg-[#EEE8F5]">
      <div className="container-large">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            title="Your Contributions, Fully Accounted For"
            subtitle="We ensure every donation is used responsibly, with clear documentation of where your money goes."
            className="m-auto max-w-[768px] text-center lg:m-0 lg:max-w-max lg:text-left"
          />
          <p className="m-auto max-w-[768px] text-center text-lg lg:m-0 lg:max-w-max lg:text-left">
            At KindKids Charity, transparency is our top priority. We
            meticulously document all transactions, whether it's purchasing
            medical supplies, funding rehabilitation programs, or providing for
            daily needs. Below, you'll find proof of where your support has made
            a real difference.
          </p>
        </div>
        <div className="spacer-medium"></div>
        <ul className="layout-three-center">
          <li className="layout-thuree-center-items">
            <FeaturesCard
              title="100% Accountability"
              text="Detailed receipts for every transaction."
              imageSrc="/images/section-features/money.svg"
            />
          </li>
          <li className="layout-thuree-center-items">
            <FeaturesCard
              title="Regular Reports"
              text="Clear updates on how donations are being spent."
              imageSrc="/images/section-features/report.svg"
            />
          </li>
          <li className="layout-thuree-center-items">
            <FeaturesCard
              title="Direct Impact"
              text="See exactly who benefits from your kindness."
              imageSrc="/images/section-features/love.svg"
            />
          </li>
        </ul>
        <div className="spacer-medium"></div>
        <div className="text-center lg:text-left">
          <CTAButtons hasDonateBtn>
            <Button variant="primary" label="Donate Now" />
          </CTAButtons>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
