import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.styled";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

interface Props {
  primary: boolean;
  imgStart: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  img: string;
  alt: string;
}

const InfoSection: React.FC<Props> = ({
  primary,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec primary={primary}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine primary={primary}>{topLine}</TopLine>
                <Heading primary={primary}>{headline}</Heading>
                <Subtitle primary={primary}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper imgStart={imgStart}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
