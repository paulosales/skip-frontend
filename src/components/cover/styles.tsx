import styled from "styled-components";
import device from "../../responsive/device";

export const CoverContainer = styled.div`
  display: relative;
`;

export const CoverBackground = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 680px;

  background-image: url(assets/background_lg.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
  z-index: -1;
`;

export const CoverSubContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    padding-right: 0px 40px 0px 40px;
  }
`;

export const CoverControlGroup = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  margin: 0px;

  @media ${device.laptop} {
    flex-direction: row;
    margin: 0px 60px 0px 60px;
  }
`;

export const Headline = styled.div`
  padding: 24px;

  @media ${device.laptop} {
    width: 50%;
    height: 615px;
    padding: 0px 30px;
  }
`;

export const DeliverWithSkip = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA65;
  font-size: 72px;
  letter-spacing: 0px;
  line-height: 70px;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const Quote = styled.div`
  color: #fff;
  flex-grow: 1;
  display: flex;
  margin-top: 50px;
`;
