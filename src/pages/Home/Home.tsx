import InfoSection from "../../components/InfoSection";
import { sectionOne, sectionTwo, sectionThree, sectionFour } from "./data";
import Pricing from "../../components/Pricing";

const Home = () => {
  return (
    <>
      <InfoSection {...sectionOne} />
      <InfoSection {...sectionTwo} />
      <InfoSection {...sectionThree} />
      <Pricing />
      <InfoSection {...sectionFour} />
    </>
  );
};

export default Home;
