import styled from "styled-components";
import device from "../../responsive/device";
import Button from "../button";

export const WhySkipContainer = styled.section`
  background-color: #f2f3f7;
`;

export const WhySkipRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const WhySkipInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;

  @media ${device.tablet} {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const WhySkipInfoBox = styled.div`
  margin: 48px;
  max-width: 380px;
`;

export const WhySkipTitle = styled.p`
  display: block;
  font-size: 24px;
  margin-top: 0;
  font-family: CoreSansA65;
  margin-bottom: 40px;
  letter-spacing: 0.2px;

  @media ${device.laptop} {
    font-size: 48px;
  }
`;

export const WhySkipDetails = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`;

export const WhySkipVideo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  @media ${device.tablet} {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const WhySkipImage = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
`;

export const VideoButton = styled(Button)`
  position: absolute;
  left: 64px;
  bottom: 32px;
  display: inline-flex;
  justify-content: center;
`;
