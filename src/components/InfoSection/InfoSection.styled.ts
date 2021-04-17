import styled from "styled-components";

interface PrimaryProp {
  primary: boolean;
}
interface ImgStartProp {
  imgStart: boolean;
}

export const InfoSec = styled.div<PrimaryProp>`
  color: #fff;
  padding: 160px 0;
  background: ${({ primary }) => (primary ? "#101522" : "#fff")};
`;

export const InfoRow = styled.div<ImgStartProp>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div<PrimaryProp>`
  color: ${({ primary }) => (primary ? "#a9b3c1" : "#4b559f")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<PrimaryProp>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ primary }) => (primary ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p<PrimaryProp>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ primary }) => (primary ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div<ImgStartProp>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
