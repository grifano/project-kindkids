import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";

const SectionContact = () => {
  return (
    <section id="contact" className="section-padding bg-primary-lightBlue">
      <div className="container-large">
        <SectionHeading
          title="We’d Love to Hear From You"
          subtitle="We’re here to answer your questions and listen."
          eyebrow="Let's connect"
          className="text-center text-white"
        />
        <div className="spacer-medium"></div>
        <div className="grid grid-cols-1 overflow-hidden rounded-large border-2 border-primary-lightBlue bg-white shadow-xxlarge sm:grid-cols-2">
          <div className="flex flex-col items-start p-5 max-sm:gap-8 lg:p-10">
            <ul className="sm:mb-20">
              <li>
                <Link
                  className="inline-flex items-center gap-2 py-1 text-lg font-medium text-primary-lightBlue hover:underline md:py-2"
                  href="mailto:kindkidsca@gmail.com"
                >
                  <MdEmail />
                  kindkidsca@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-2 py-1 text-lg font-medium text-primary-lightBlue hover:underline md:py-2"
                  href="tel:+15478304024"
                >
                  <MdPhone />
                  +1 547-830-4024
                </Link>
              </li>
            </ul>
            <Image
              src="/images/section-contact/big-logo.png"
              width={350}
              height={350}
              alt="kindkids logo"
              layout="responsive"
              className="max-w-[50%]"
            />
          </div>
          <div className="flex w-full flex-col justify-center bg-[#D4E8F4] p-5 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
