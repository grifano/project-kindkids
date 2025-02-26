import React from "react";
import SectionHeading from "./SectionHeading";
import SponsorCard from "./SponsorCard";

const SectionSponsors = () => {
  return (
    <section className="section-padding">
      <div className="container-large">
        <SectionHeading
          title="Our Generous Sponsors Making This Event Possible"
          subtitle="With the support of our partners, this event will be a night to remember. Join us in making an impact."
          className="max-w-[768px]"
        />
        <div className="spacer-medium"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SponsorCard
            logo="/images/section-sponsors/boucherie.jpg"
            title="Mount Boucherie Winery "
            subtitle="Proudly supporting our cause with a generous wine donation, Mount Boucherie Estate Winery enhances our charity dinner with exceptional flavors, elevating the experience for our guests."
            website="https://mtboucherie.com/"
          />
          <SponsorCard
            logo="/images/section-sponsors/the-victor.jpg"
            title="The Victor Steakhouse"
            subtitle="A valued partner in our mission, The Victor Steakhouse provided essential support, from venue essentials to auction contributions, helping us create an unforgettable evening."
            website="https://www.parqcasino.com/the-victor"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSponsors;
