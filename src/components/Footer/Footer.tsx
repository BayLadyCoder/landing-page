import React from "react";
import { FooterContainer } from "./Footer.styled";
import SiteMap from "./SiteMap";
import Subscription from "./Subscription";
import SocialMedia from "./SocialMedia";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Subscription />
      <SiteMap />
      <SocialMedia />
    </FooterContainer>
  );
};

export default Footer;
