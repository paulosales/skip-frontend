import React, { ReactElement } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FormattedMessage } from "react-intl";
import device from "../responsive/devices";

const GetStartedContainer = styled.section`
  display: flex;
  padding: 48px;
  justify-content: center;
  background-color: #172026;

  @media ${device.laptop} {
    padding: 72px;
  }
`;

const GetStartedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: calc(100% + 40px);
  margin: -20px;
`;

const GetStartedTitle = styled.div`
  margin: 0;
  box-sizing: border-box;
  flex-grow: 0;
  width: 100%;
  padding: 20px;
  color: #fff;
  font-family: CoreSansA55;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 31.2px;
  box-sizing: border-box;
`;

const GetStartedStep = styled.div`
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;


  @media ${device.laptop} {
    max-width: 33.33333%;
    flex-basis: 33.33333%;
  }
`;

const GetStartedStepList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const GetStartedStepTitle = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA45;
  font-size: 21px;
  letter-spacing: 0px;
  line-height: 27.3px;
  margin-bottom: 8px;
`;

const GetStartedStepDescription = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`;

const GetStartedButtonBox = styled(GetStartedStep)``;

const GetStartedButton = styled(Button)`
  width: 100%;
`;

function GetStarted(): ReactElement {
  return (
    <GetStartedContainer>
      <GetStartedBox>
        <GetStartedTitle>
          <FormattedMessage id="howToGetStarted" />
        </GetStartedTitle>
        <GetStartedStepList>
          <GetStartedStep>
            <GetStartedStepTitle>
              <FormattedMessage id="signup" />
            </GetStartedStepTitle>
            <GetStartedStepDescription>
              <FormattedMessage id="signupDetail" />
            </GetStartedStepDescription>
          </GetStartedStep>
          <GetStartedStep>
            <GetStartedStepTitle>
              <FormattedMessage id="downloadTheCourierApp" />
            </GetStartedStepTitle>
            <GetStartedStepDescription>
              <FormattedMessage id="downloadTheCourierAppDetail" />
            </GetStartedStepDescription>
          </GetStartedStep>
          <GetStartedStep>
            <GetStartedStepTitle>
              <FormattedMessage id="earnMoney" />
            </GetStartedStepTitle>
            <GetStartedStepDescription>
              <FormattedMessage id="earnMoneyDetail" />
            </GetStartedStepDescription>
          </GetStartedStep>
        </GetStartedStepList>
        <GetStartedButtonBox>
          <GetStartedButton>
            <FormattedMessage id="applyNow" />
          </GetStartedButton>
        </GetStartedButtonBox>
      </GetStartedBox>
    </GetStartedContainer>
  );
}

export default GetStarted;
