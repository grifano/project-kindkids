import RichTextRenderer from "@/components/RichTextRenderer";
import SectionEventHero from "@/components/SectionEventHero";
import SectionPhotoGallery from "@/components/SectionPhotoGallery";
import ShareButtons from "@/components/ui/ShareButtons";
import { eventsPast } from "@/constants/events";
import { headers } from "next/headers";
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
      <SectionEventHero
        caption={currentEvent?.year}
        time={currentEvent?.time}
        location={currentEvent?.location}
        coverImage={currentEvent?.coverPhoto}
        coverAlt="woman draw a paint"
        isPast
      />
      <div className="container-small">
        <RichTextRenderer content={currentEvent?.richText} />
        <div className="mt-10">
          <h4 className="mb-4 text-center font-lora text-[1.25rem]">Share</h4>
          <ShareButtons url={fullUrl} />
        </div>
      </div>
      <SectionPhotoGallery photos={currentEvent?.photoGallery} />
    </>
  );
};

export default EventDetail;
