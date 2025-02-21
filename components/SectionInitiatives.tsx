import React from "react";
import SectionHeading from "./SectionHeading";
import InitiativeCard from "./InitiativeCard";
import Button from "./Button";

const SectionInitiatives = () => {
  return (
    <section id="initiatives" className="section-padding bg-primary-lightBlue">
      <div className="container-large">
        <SectionHeading
          title="Our Key Initiatives to Make a Difference"
          subtitle="We focus on impactful initiatives that unite communities and support children with disabilities. Our programs are designed to create lasting change and inspire compassion."
          eyebrow="Initiatives"
          className="m-auto max-w-[768px] text-center text-white"
        />
        <div className="spacer-medium"></div>
        <ul className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <li>
            <InitiativeCard
              title="Art-Driven Charity Dinners for a Cause"
              text="These events bring people together to raise funds and awareness for our
        mission."
              imageSrc="/images/section-initiatives/art.svg"
            />
          </li>
          <li>
            <InitiativeCard
              title="Support for Disabled Children in Need"
              text="We provide essential medical, educational, and psychological
              support to empower these children."
              imageSrc="/images/section-initiatives/hand.svg"
            />
          </li>
          <li>
            <InitiativeCard
              title="Community Engagement Through Shared Experiences"
              text="Our initiatives inspire kindness and foster a sense of belonging."
              imageSrc="/images/section-initiatives/comunity.svg"
            />
          </li>
        </ul>
        <div className="spacer-medium"></div>
        <div className="flex justify-center">
          <Button variant="primary" label="Donate Now" url="/" />
          <Button
            label="Learn more"
            url="/"
            variant="link"
            className="ml-4 text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionInitiatives;
