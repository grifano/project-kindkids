import Button from "@/components/Button";
import RichTextRenderer from "@/components/RichTextRenderer";
import SectionCTASponsor from "@/components/SectionCTASponsor";
import ShareButtons from "@/components/ShareButtons";
import kidsDB from "@/constants/kidsDB";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const Profile = async ({ params }: RouteParams) => {
  const { id } = await params;

  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = (await headersList).get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}/profile/${id}`;

  const kidProfile = kidsDB.find((kid) => kid.id === id);

  if (!kidProfile) {
    return <div>Profile not found</div>;
  }

  const { pageTitle, pageDescription, richText } = kidProfile;

  return (
    <>
      {/* Section - Hero */}
      <section className="hero-pedding">
        <div className="container-large grid grid-cols-1 items-center justify-items-center gap-12 text-center lg:grid-cols-2 lg:justify-items-start lg:text-left">
          <div className="mt-12 max-w-[38.5rem] lg:mt-0">
            <h1 className="title-h1">{pageTitle}</h1>
            <p className="mt-6 text-lg font-medium lg:text-2xl">
              {pageDescription}
            </p>
            <div className="mt-8 flex justify-center gap-2 lg:justify-start">
              <Button variant="primary" label="Donate Now" url="/" />
              <Button variant="secondary" label="Learn more" url="/" />
            </div>
          </div>
          <Image
            src={kidProfile.coverImageSRC}
            alt={kidProfile.name}
            width={640}
            height={640}
            className="image-corner h-[40rem] w-[40rem] object-cover shadow-xxlarge"
          />
        </div>
      </section>
      {/* Section - Rich Text */}
      <section className="section-padding">
        <div className="container-small">
          <RichTextRenderer content={richText} />
          <div className="mt-10">
            <h4 className="mb-4 text-center font-lora text-[1.25rem]">Share</h4>
            <ShareButtons url={fullUrl} />
          </div>
        </div>
      </section>
      <SectionCTASponsor />
    </>
  );
};

export default Profile;
