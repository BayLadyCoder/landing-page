import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

interface InfoSecProps {
  lightBg: boolean;
}

export const InfoSec = styled.div<InfoSecProps>`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;
