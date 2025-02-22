import SectionCTAHands from "@/components/SectionCTAHands";
import SectionHeading from "@/components/SectionHeading";
import SectionVolonteers from "@/components/SectionVolonteers";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      {/* Section Hero */}
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
      {/* Section Main Text Content */}
      <section className="section-padding">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <h2 className="title-h2">From a Passion to a Purpose</h2>
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
      {/* Section Our Values */}
      <section>
        <div className="container-large">Section Our Values</div>
      </section>
      {/* Section Our Mission */}
      <section className="section-padding bg-sky-smaller relative">
        <div className="glass-overlay"></div>
        <div className="container-large relative z-20 grid grid-cols-1 gap-6 text-white lg:grid-cols-2">
          <h2 className="title-h2">Our Mission</h2>
          <p className="text-xl font-light italic tracking-wider md:text-4xl">
            “To unite people through art-driven charity dinners, creating real
            and meaningful support for children with disabilities in Ukraine.”
          </p>
        </div>
      </section>
      {/* Section Regular Sponsors */}
      <section className="section-padding bg-primary-lightBlue">
        <div className="container-large">
          <div className="flex flex-wrap items-center gap-8 rounded-3xl bg-white p-10">
            <SectionHeading
              title="Working Together for a Greater Impact"
              subtitle="We are proud to collaborate with businesses that share our vision. Their contributions allow us to create meaningful charity events that make a real difference."
              className="max-w-[576px]"
            />
            <div className="flex flex-grow flex-wrap justify-end gap-2">
              <Image
                src="/images/section-about-sponsors/boucherie.png"
                alt="mt boucherie logo"
                width={200}
                height={142}
              />
              <Image
                src="/images/section-about-sponsors/victor.png"
                alt="victor logo"
                width={200}
                height={142}
              />
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
