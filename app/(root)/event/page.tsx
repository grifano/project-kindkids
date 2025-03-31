import Layout01 from "@/components/Layout01";
import SectionEventHero from "@/components/SectionEventHero";
import SectionHeading from "@/components/SectionHeading";
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
      <section className="section-padding">
        <div className="container-large">
          <SectionHeading
            title="Join Us for an Evening of Hope and Generosity."
            subtitle="Save the date for our 2025 charity dinner! Enjoy an unforgettable night of fine dining, inspiring art, and heartfelt giving as we come together to support children with disabilities in Ukraine. Your presence makes a difference."
            className="m-auto max-w-[768px] text-center"
          />
          <div className="spacer-medium"></div>
          {/* Layout Content -> Image */}
          <Layout01
            title="Charity Dinner with Purpose"
            subTitle="Gather around the table for a thoughtfully prepared multi-course meal, made possible by our generous sponsors. This is a chance to connect, reflect, and discuss how we can make a difference."
            imageUrl="/images/page-event/2025/people-talk.jpg"
            imageAlt="temp image"
          />
          <div className="spacer-medium"></div>
          {/* Layout Image -> Content */}
          <Layout01
            title="Live Art & Auctions"
            subTitle="Witness the creation of a unique artwork, inspired by the cause. This painting, along with other donated items, will be auctioned to directly support children in need."
            imageUrl="/images/page-event/2025/artist-draw.jpg"
            imageAlt="temp image"
            isReverse
          />
          <div className="spacer-medium"></div>
          {/* Layout Content -> Image */}
          <Layout01
            title="Raising Funds to Change Lives"
            subTitle="Every ticket purchased, every auction bid, and every donation goes directly toward medical supplies, essential care, and support for families facing unimaginable hardships."
            imageUrl="/images/page-event/2025/food-supply.jpg"
            imageAlt="Two women standing next to stacks of boxed supplies in a warehouse-like setting, representing a donation or aid delivery"
          />
        </div>
      </section>
    </>
  );
};

export default page;
