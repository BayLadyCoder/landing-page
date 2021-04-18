import InfoSection from "../components/InfoSection";
import {
  homeSectionOne,
  homeSectionTwo,
  homeSectionThree,
  homeSectionFour,
} from "./data";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <InfoSection {...homeSectionOne} />
      <InfoSection {...homeSectionTwo} />
      <InfoSection {...homeSectionThree} />
      <Pricing />
      <InfoSection {...homeSectionFour} />
    </>
  );
};

export default Home;
