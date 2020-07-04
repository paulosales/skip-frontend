import React, { ReactElement } from "react";
import styled from "styled-components";

const OffersContainer = styled.section`
  padding: 72px 64px 96px 64px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const OffersRow = styled.div`
  max-width: 960px;
  width: calc(100% + 40px);
  margin: -20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const OfferBox = styled.div`
  display: flex;
  max-width: 380px;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  margin: 0;
  box-sizing: border-box;
`;

const OfferImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const OfferTitle = styled.p`
  font-size: 20px;
  font-family: CoreSansA55;
  letter-spacing: 0;
`;

const OfferDescription = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`;

function Offers(): ReactElement {
  return (
    <OffersContainer>
      <OffersRow>
        <OfferBox>
          <OfferImage src="assets/calendar.svg" />
          <OfferInfo>
            <OfferTitle>Choose Your Schedule</OfferTitle>
            <OfferDescription>
              You are in control of your own schedule and can adjust your weekly
              availability based on what works for you.
            </OfferDescription>
          </OfferInfo>
        </OfferBox>
        <OfferBox>
          <OfferImage src="assets/money.svg" />
          <OfferInfo>
            <OfferTitle>Get Paid Weekly</OfferTitle>
            <OfferDescription>
              At the end of each week, your earnings and tips will be directly
              deposited into your account.
            </OfferDescription>
          </OfferInfo>
        </OfferBox>
      </OffersRow>
    </OffersContainer>
  );
}

export default Offers;
