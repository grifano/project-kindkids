import SectionContact from "@/components/SectionContact";
import SectionCTASponsor from "@/components/SectionCTASponsor";
import SectionEvents from "@/components/SectionEvents";
import SectionFeatures from "@/components/SectionFeatures";
import SectionHero from "@/components/SectionHero";
import SectionInitiatives from "@/components/SectionInitiatives";
import SectionKidsCarousel from "@/components/SectionKidsCarousel";
import kidsDB from "@/constants/kidsDB";

const Home = () => (
  <>
    <SectionHero />
    {/* <SectionKids /> */}
    <SectionKidsCarousel profiles={kidsDB} />
    <SectionInitiatives />
    <SectionEvents />
    <SectionFeatures />
    <SectionCTASponsor />
    <SectionContact />
  </>
);

export default Home;
