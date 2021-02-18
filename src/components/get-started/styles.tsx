import styled from "styled-components";
import device from "../../responsive/device";
import Button from "../button";

export const GetStartedContainer = styled.section`
  display: flex;
  padding: 48px;
  justify-content: center;
  background-color: #172026;

  @media ${device.laptop} {
    padding: 72px;
  }
`;

export const GetStartedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: calc(100% + 40px);
  margin: -20px;
  max-width: 1150px;
`;

export const GetStartedTitle = styled.div`
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

export const GetStartedStep = styled.div`
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

export const GetStartedStepList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const GetStartedStepTitle = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA45;
  font-size: 21px;
  letter-spacing: 0px;
  line-height: 27.3px;
  margin-bottom: 8px;
`;

export const GetStartedStepDescription = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`;

export const GetStartedButtonBox = styled(GetStartedStep)``;

export const GetStartedButton = styled(Button)`
  width: 100%;
`;
