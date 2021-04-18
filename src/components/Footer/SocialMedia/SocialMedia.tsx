import {
  SocialMediaContainer,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
} from "./SocialMedia.styled";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaWrap>
        <SocialLogo to="/">
          <SocialIcon /> ULTRA
        </SocialLogo>
        <WebsiteRights>ULTRA © 2021</WebsiteRights>
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.youtube.com/"
            target="_blank"
            aria-label="Youtube"
            rel="noopener"
          >
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
