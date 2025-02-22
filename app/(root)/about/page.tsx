import SectionCTAHands from "@/components/SectionCTAHands";
import SectionVolonteers from "@/components/SectionVolonteers";
import Image from "next/image";
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
      <section className="section-padding">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <h2 className="font-lora text-[2rem] font-medium leading-tight md:text-[3rem]">
              From a Passion to a Purpose
            </h2>
            <div className="flex flex-col gap-4 max-lg:mt-6">
              <p>
                I was born and raised in Ukraine, where I had the privilege of
                attending a Waldorf school—an environment that nurtured
                creativity, empathy, and a deep appreciation for human
                connection. It was there that I first encountered the struggles
                faced by children with physical disabilities. Volunteering with
                them as a student left a lasting imprint on me, shaping my
                understanding of the challenges they face and inspiring a
                lifelong desire to help.
              </p>
              <p>
                Years later, after moving to Canada, that desire never faded. I
                knew I had to take action—to reconnect with my roots and support
                the children in Ukraine who continue to face immense hardships.
                That’s how this initiative was born.
              </p>
              <p>
                With a deep passion for{" "}
                <strong>hospitality and the arts</strong>, I realized that a
                <strong>charity dinner</strong> could be more than just an
                event—it could be a movement.{" "}
                <strong>
                  event—it could be a movement. Food and art have always been my
                  way of expressing care and connection event—it could be a
                  movement.{" "}
                </strong>
                , and I wanted to channel these passions into something that
                could truly make a difference.
              </p>
              <p>
                This non-profit is my way of using the skills and experiences
                I’ve gathered—creating unforgettable dining experiences,
                <strong>
                  curating artistic expression, and bringing people together—to
                  help children in need.
                </strong>
              </p>
            </div>
          </div>
          <Image
            src="/images/section-about-content/maryna-with-timur-family.jpg"
            width={1281}
            height={720}
            alt="Maryna tougether with Timur's family"
            className="mt-10 rounded-3xl lg:mt-20"
            layout="responsive"
          />
        </div>
      </section>
      <SectionVolonteers />
      <SectionCTAHands />
    </>
  );
};

export default About;
