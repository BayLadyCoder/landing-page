import React from "react";
import {
  FooterContainer,
  FooterDescription,
  FooterSubHeading,
  FooterSubText,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
      </FooterDescription>
    </FooterContainer>
  );
};

export default Footer;
