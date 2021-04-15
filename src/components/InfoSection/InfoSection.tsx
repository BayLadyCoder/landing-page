import React from "react";
import { InfoSec } from "./InfoSection.styled";

interface Props {
  lightBg: boolean;
}

const InfoSection: React.FC<Props> = ({ lightBg }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>TEST</InfoSec>
    </>
  );
};

export default InfoSection;
