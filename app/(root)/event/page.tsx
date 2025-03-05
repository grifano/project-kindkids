import SectionEventHero from "@/components/SectionEventHero";
import React from "react";

const page = () => {
  return (
    <>
      <SectionEventHero
        time="Wednesday, April 23th at 6pm"
        caption="Coming up in 2025"
        location="<strong>“Vancuver Club”</strong>
                915 W Hastings St <br />
                Vancouver, Canada"
        coverImage="/images/page-event/2024/bg-hero-2024.avif"
        coverAlt="woman draw a paint"
      />
    </>
  );
};

export default page;
