import React from "react";
import Button from "./ui/ButtonOld";
import Image from "next/image";
import CTAButtons from "./CTAButtons";

const SectionHero = () => {
  return (
    <section className="hero-pedding">
      <div className="container-large">
        <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-white lg:grid-cols-2 lg:gap-0 lg:shadow-xxlarge">
          <div className="lg:max-w-auto flex flex-col justify-center gap-6 text-center md:m-auto md:max-w-[40rem] lg:m-0 lg:p-12 lg:text-left">
            <h1 className="primary-text-gradient font-lora text-[2.5rem] font-bold leading-tight lg:text-[3.5rem]">
              Empowering Lives Through Art and Compassion
            </h1>
            <p className="text-lg font-medium">
              Join us in making a{" "}
              <span className="font-bold">difference for children</span> with
              disabilities through{" "}
              <span className="font-bold">art-driven charity events</span>.
            </p>
            {/* Section CTA */}
            <div className="mt-2 flex justify-center gap-2 lg:justify-start">
              <CTAButtons hasDonateBtn>
                <Button label="Donate Now" variant="primary" />
              </CTAButtons>
              <Button variant="secondary" label="Learn more" url="/#kids" />
            </div>
          </div>
          <Image
            src="/images/section-hero/god-mother-art.jpg"
            alt="Mother hold child paint"
            width={656}
            height={640}
            className="h-full w-full rounded-large object-cover lg:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
