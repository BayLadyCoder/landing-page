import InfoSection from "../components/InfoSection";
import {
  homeSectionOne,
  homeSectionTwo,
  homeSectionThree,
  homeSectionFour,
} from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeSectionOne} />
      <InfoSection {...homeSectionTwo} />
      <InfoSection {...homeSectionThree} />
      <InfoSection {...homeSectionFour} />
    </>
  );
};

export default Home;
