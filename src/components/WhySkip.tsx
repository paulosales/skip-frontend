import React, { ReactElement } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FormattedMessage } from "react-intl";
import device from "../responsive/device";

const WhySkipContainer = styled.section`
  background-color: #f2f3f7;
`;

const WhySkipRow = styled.div`
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

const WhySkipInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;

  @media ${device.tablet} {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

const WhySkipInfoBox = styled.div`
  margin: 48px;
  max-width: 380px;
`;

const WhySkipTitle = styled.p`
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

const WhySkipDetails = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`;

const WhySkipVideo = styled.div`
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

const WhySkipImage = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
`;

const VideoButton = styled(Button)`
  position: absolute;
  left: 64px;
  bottom: 32px;
  display: inline-flex;
  justify-content: center;
`;

function WhySkip(): ReactElement {
  return (
    <WhySkipContainer>
      <WhySkipRow>
        <WhySkipInfo>
          <WhySkipInfoBox>
            <WhySkipTitle>
              <FormattedMessage id="whySkipTheDishes" />
            </WhySkipTitle>
            <WhySkipDetails>
              <FormattedMessage id="whySkipTheDishesDetail" />
            </WhySkipDetails>
          </WhySkipInfoBox>
        </WhySkipInfo>
        <WhySkipVideo>
          <WhySkipImage src="assets/application_video_background.jpg" />
          <VideoButton type="button" id="skip-button">
            <FormattedMessage id="watchTheVideo" />
          </VideoButton>
        </WhySkipVideo>
      </WhySkipRow>
    </WhySkipContainer>
  );
}

export default WhySkip;
