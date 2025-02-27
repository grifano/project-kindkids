import SectionContact from "@/components/SectionContact";
import SectionCTASponsor from "@/components/SectionCTASponsor";
import SectionEvents from "@/components/SectionEvents";
import SectionFeatures from "@/components/SectionFeatures";
import SectionHero from "@/components/SectionHero";
import SectionInitiatives from "@/components/SectionInitiatives";
import SectionKids from "@/components/SectionKids";

const Home = () => (
  <>
    <SectionHero />
    <SectionKids />
    <SectionInitiatives />
    <SectionEvents />
    <SectionFeatures />
    <SectionCTASponsor />
    <SectionContact />
  </>
);

export default Home;
