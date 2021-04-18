import InfoSection from "../../components/InfoSection";
import { sectionTwo } from "./data";
import Pricing from "../../components/Pricing";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...sectionTwo} />
    </>
  );
};

export default Services;
