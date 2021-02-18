import styled from "styled-components";
import device from "../../responsive/device";

export const OffersContainer = styled.section`
  padding: 72px 64px 96px 64px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const OffersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  width: calc(100% + 40px);
  margin: -20px;

  box-sizing: border-box;

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

export const OfferBox = styled.div`
  display: flex;
  max-width: 380px;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  margin: 0;
  box-sizing: border-box;
`;

export const OfferImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfferTitle = styled.p`
  font-size: 20px;
  font-family: CoreSansA55;
  letter-spacing: 0;
`;

export const OfferDescription = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`;
