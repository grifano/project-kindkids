import React from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import FeaturesCard from "./FeaturesCard";

const SectionFeatures = () => {
  return (
    <section className="section-padding bg-[#EEE8F5]">
      <div className="container-large">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            title="Your Contributions, Fully Accounted For"
            subtitle="We ensure every donation is used responsibly, with clear documentation of where your money goes."
          />
          <p className="text-lg">
            At KindKids Charity, transparency is our top priority. We
            meticulously document all transactions, whether it's purchasing
            medical supplies, funding rehabilitation programs, or providing for
            daily needs. Below, you'll find proof of where your support has made
            a real difference.
          </p>
        </div>
        <div className="spacer-medium"></div>
        <ul className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <li>
            <FeaturesCard
              title="100% Accountability"
              text="Detailed receipts for every transaction."
              imageSrc="/images/section-features/money.svg"
            />
          </li>
          <li>
            <FeaturesCard
              title="Regular Reports"
              text="Clear updates on how donations are being spent."
              imageSrc="/images/section-features/report.svg"
            />
          </li>
          <li>
            <FeaturesCard
              title="Direct Impact"
              text="See exactly who benefits from your kindness."
              imageSrc="/images/section-features/love.svg"
            />
          </li>
        </ul>
        <div className="spacer-medium"></div>
        <div className="flex gap-2">
          <Button variant="primary" label="Donate Now" url="/" />
          <Button label="Buy a ticket" url="/" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
