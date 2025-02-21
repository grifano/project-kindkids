import SectionCTAHands from "@/components/SectionCTAHands";
import SectionVolonteers from "@/components/SectionVolonteers";
import React from "react";

const About = () => {
  return (
    <>
      <section className="hero-pedding bg-sky">
        <div className="container-large">
          <div className="bg-light-transparent overflow-hidden rounded-3xl p-5 text-center text-white shadow-2xl backdrop-blur-sm lg:p-20">
            <div className="m-auto max-w-[768px]">
              <h1 className="font-lora text-[2.5rem] font-bold leading-tight lg:text-[3.5rem]">
                Bringing People Together to Make a Difference
              </h1>
              <p className="mt-6 text-xl font-medium">
                Through art, food, and shared experiences, we are building a
                compassionate community dedicated to supporting children with
                disabilities in Ukraine.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SectionVolonteers />
      <SectionCTAHands />
    </>
  );
};

export default About;
