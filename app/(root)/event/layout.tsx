import SectionCTAHands from "@/components/SectionCTAHands";
import SectionSponsors from "@/components/SectionSponsors";
import SectionVolonteers from "@/components/SectionVolonteers";
import React, { ReactNode } from "react";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      <SectionVolonteers />
      <SectionSponsors />
      <SectionCTAHands />
    </main>
  );
};

export default Rootlayout;
