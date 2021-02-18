import styled from "styled-components";
import Button from "../button";
import device from "../../responsive/device";

export const FooterContainer = styled.section`
  display: flex;
  padding: 48px 48px 64px 48px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #172026;
`;

export const FooterTitle = styled.p`
  font-size: 24px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  font-family: CoreSansA55;
  letter-spacing: -1.5px;

  @media ${device.tabletS} {
    font-size: 48px;
  }
`;

export const FooterButton = styled(Button)`
  margin-top: 24px;
  padding-left: 100px;
  padding-right: 100px;
  height: 50px;
`;
