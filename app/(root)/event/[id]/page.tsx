import RichTextRenderer from "@/components/RichTextRenderer";
import SectionCTAHands from "@/components/SectionCTAHands";
import SectionPhotoGallery from "@/components/SectionPhotoGallery";
import SectionSponsors from "@/components/SectionSponsors";
import SectionVolonteers from "@/components/SectionVolonteers";
import ShareButtons from "@/components/ShareButtons";
import { eventsPast } from "@/constants/events";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const EventDetail = async ({ params }: RouteParams) => {
  const { id } = await params;
  const currentEvent = await eventsPast.find((event) => event.year === id);
  if (!currentEvent) {
    return <div>Event not found</div>;
  }

  // Share url
  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = (await headersList).get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}/profile/${id}`;

  return (
    <>
      <section className="hero-pedding">
        <div className="container-large">
          <div className="image-corner relative flex items-end justify-center">
            <div className="gradient-black-overlay absolute left-0 top-0 z-20 h-full w-full"></div>
            <div className="relative z-40 flex flex-col gap-4 pb-[48px] pt-[112px] text-center text-white lg:pb-[112px] lg:pt-[335px]">
              <p className="text-lg">{currentEvent?.year}</p>
              <p className="title-h3 font-bold line-through">
                {currentEvent?.time}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: currentEvent?.location }}
                className="text-lg"
              ></p>
            </div>
            <Image
              src={currentEvent?.coverPhoto}
              alt="woman draw a paint"
              width={1312}
              height={768}
              className="absolute left-0 top-0 z-10 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="container-small">
        <RichTextRenderer content={currentEvent?.richText} />
        <div className="mt-10">
          <h4 className="mb-4 text-center font-lora text-[1.25rem]">Share</h4>
          <ShareButtons url={fullUrl} />
        </div>
      </div>
      <SectionPhotoGallery photos={currentEvent?.photoGallery} />
      <SectionVolonteers />
      <SectionSponsors />
      <SectionCTAHands />
    </>
  );
};

export default EventDetail;
