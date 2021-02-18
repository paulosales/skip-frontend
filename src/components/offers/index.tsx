import React, { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import {
  OfferBox,
  OfferDescription,
  OfferImage,
  OfferInfo,
  OffersContainer,
  OffersRow,
  OfferTitle,
} from "./styles";

function Offers(): ReactElement {
  return (
    <OffersContainer>
      <OffersRow>
        <OfferBox>
          <OfferImage src="assets/calendar.svg" />
          <OfferInfo>
            <OfferTitle>
              <FormattedMessage id="chooseYourScheduler" />
            </OfferTitle>
            <OfferDescription>
              <FormattedMessage id="chooseYourSchedulerDetail" />
            </OfferDescription>
          </OfferInfo>
        </OfferBox>
        <OfferBox>
          <OfferImage src="assets/money.svg" />
          <OfferInfo>
            <OfferTitle>
              <FormattedMessage id="getPaidWeekly" />
            </OfferTitle>
            <OfferDescription>
              <FormattedMessage id="getPaidWeeklyDetail" />
            </OfferDescription>
          </OfferInfo>
        </OfferBox>
      </OffersRow>
    </OffersContainer>
  );
}

export default Offers;
