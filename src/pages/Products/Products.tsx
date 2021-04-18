import InfoSection from "../../components/InfoSection";
import { sectionThree, sectionFour } from "./data";
import Pricing from "../../components/Pricing";

const Products = () => {
  return (
    <>
      <InfoSection {...sectionThree} />
      <InfoSection {...sectionFour} />
      <Pricing />
    </>
  );
};

export default Products;
