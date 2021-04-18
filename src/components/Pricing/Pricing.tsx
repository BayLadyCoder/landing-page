import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.styled";
import { pricingData } from "./pricingData";

const Pricing: React.FC = () => {
  const chooseIcon = (iconName: string) => {
    switch (iconName) {
      case "GiRock":
        return <GiRock />;
      case "GiCrystalBars":
        return <GiCrystalBars />;
      case "GiCutDiamond":
        return <GiCutDiamond />;
      default:
        return;
    }
  };

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "64" }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {pricingData.map((data) => (
              <PricingCard to="/sign-up">
                <PricingCardInfo>
                  <PricingCardIcon>{chooseIcon(data.icon)}</PricingCardIcon>
                  <PricingCardPlan>{data.plan}</PricingCardPlan>
                  <PricingCardCost>${data.price}</PricingCardCost>
                  <PricingCardLength>{data.length}</PricingCardLength>
                  <PricingCardFeatures>
                    {data.features.map((feature) => (
                      <PricingCardFeature>{feature}</PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button primary>Choose Plan</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};
export default Pricing;
