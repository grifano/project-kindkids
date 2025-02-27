import SectionCTAHands from "@/components/SectionCTAHands";
import SectionHeading from "@/components/SectionHeading";
import SectionVolonteers from "@/components/SectionVolonteers";
import Image from "next/image";
import React from "react";
import { FiBox } from "react-icons/fi";

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
            <h2 className="title-h2">Our story</h2>
            <div className="flex flex-col gap-4 max-lg:mt-6">
              <p>
                I was born and raised in Ukraine, where I was fortunate to grow
                up in a Waldorf school—an environment that nurtured creativity,
                empathy, and a deep understanding of the world’s beauty. But it
                also opened my eyes to the struggles of those around me,
                particularly children living with physical disabilities. During
                my time at school, I had the opportunity to volunteer with these
                incredible kids, an experience that left a lasting impact on me.
              </p>
              <p>
                After moving to Canada, years passed, but the desire to help
                never faded. Eventually, I found the strength and clarity to
                take action—to reconnect with my roots and support children in
                Ukraine who continue to face immense challenges. That’s how the
                idea for this non-profit was born.
              </p>
              <p>
                Given my lifelong passion for hospitality and deep love for the
                arts, I knew that a charity dinner would be the perfect way to
                bring people together for a meaningful cause. Food and art have
                always been my forms of expression—hospitality has been my
                career, and I truly believe my mission in life is to feed
                people, not just physically, but also emotionally, through
                shared experiences and connection.
              </p>
              <p>
                This non-profit is my way of using the strengths I’ve developed
                over the years—creating unforgettable dining experiences,
                curating artistic expression, and bringing people together—to
                make a real impact. Art and hospitality are universal languages,
                and through them, we can inspire generosity, foster connection,
                and change lives.
              </p>
              <p>
                At the heart of our mission is the belief that everyone has a
                role to play in creating a more compassionate world. Whether
                through cooking, painting, volunteering, or donating, we all
                have something valuable to give. And when we come together, we
                can turn that collective effort into real, tangible support for
                children who need it the most.
              </p>
              <p>
                This is just the beginning of our journey. Through each event,
                each meal, and each act of kindness, we are building a community
                dedicated to making a difference—one plate, one brushstroke, and
                one child at a time.
              </p>
            </div>
          </div>
          <Image
            src="/images/section-about-content/maryna-with-timur-family.jpg"
            width={1281}
            height={720}
            alt="Maryna tougether with Timur's family"
            className="image-corner mt-10 lg:mt-20"
            layout="responsive"
          />
        </div>
      </section>
      {/* Section Our Values */}
      <section className="section-padding">
        <div className="container-large">
          <SectionHeading
            title="Our Values"
            subtitle="Guided by compassion, creativity, and community, our values shape everything we do to support children in need."
            className="max-w-[768px]"
          />
          <div className="spacer-medium"></div>
          <ul className="grid grid-cols-1 gap-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-12">
            <li className="flex flex-col gap-4">
              <FiBox />
              <h3 className="font-lora text-3xl">Community First</h3>
              <p>Bringing people together for a greater purpose.</p>
            </li>
            <li className="flex flex-col gap-4">
              <FiBox />
              <h3 className="font-lora text-3xl">Art & Expression</h3>
              <p>Using creativity to inspire generosity.</p>
            </li>
            <li className="flex flex-col gap-4">
              <FiBox />
              <h3 className="font-lora text-3xl">Compassion in Action</h3>
              <p>Turning kindness into real impact.</p>
            </li>
            <li className="flex flex-col gap-4">
              <FiBox />
              <h3 className="font-lora text-3xl">Hospitality & Connection</h3>
              <p>Creating shared experiences that foster change.</p>
            </li>
          </ul>
        </div>
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
