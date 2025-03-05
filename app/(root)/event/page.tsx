import Button from "@/components/Button";
import { donatePayLink } from "@/constants/payments";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="hero-pedding">
        <div className="container-large">
          <div className="image-corner relative flex items-center justify-center">
            <div className="gradient-black-overlay absolute left-0 top-0 z-20 h-full w-full"></div>
            <div className="relative z-40 flex flex-col gap-3 py-[80px] text-center font-lora text-white lg:gap-6 lg:py-[160px]">
              <p className="event-caption">Coming up in 2025</p>
              <p className="event-time">Wednesday, April 23th at 6pm</p>
              <p className="event-location">
                <strong>“Vancuver Club”</strong>
                915 W Hastings St <br />
                Vancouver, Canada
              </p>
              <div className="mt-8 flex justify-center gap-2">
                <Button
                  url={donatePayLink.url}
                  variant="primary"
                  label={donatePayLink.title}
                  secure
                />
                <Button variant="white" label="Learn more" url="/404" />
              </div>
            </div>
            <Image
              src="/images/page-event/2024/bg-hero-2024.avif"
              alt="woman draw a paint"
              width={1312}
              height={768}
              className="absolute left-0 top-0 z-10 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
