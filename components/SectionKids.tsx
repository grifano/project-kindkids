import React from "react";
import SectionHeading from "./SectionHeading";
import KidBigCard from "./KidBigCard";
import kidsDB from "@/constants/kidsDB";

const SectionKids = () => {
  return (
    <section id="kids" className="section-padding">
      <div className="container-large">
        <SectionHeading
          title="Choose a Child to Support and Change Their Life"
          subtitle="Your support can make an immediate and lasting difference. Choose a child to sponsor, attend one of our art-driven charity dinners, or donate to fund essential care, medication, and more."
          className="m-auto max-w-[48rem] text-center"
        />
        <div className="spacer-medium"></div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10">
          {kidsDB.map((kidProfile) => {
            return <KidBigCard key={kidProfile.id} kidProfile={kidProfile} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionKids;
