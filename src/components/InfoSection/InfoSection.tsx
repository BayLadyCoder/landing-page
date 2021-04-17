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
  lightBg: boolean;
  imgStart: string;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  img: string;
  alt: string;
  start: string;
}

const InfoSection: React.FC<Props> = ({
  primary,
  lightBg,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  lightTopLine,
  lightText,
  lightTextDesc,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
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
