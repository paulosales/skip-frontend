import React, { ReactElement } from "react";
import CourierForm from "../courier-form/CourierForm";
import { FormattedMessage } from "react-intl";
import {
  CoverBackground,
  CoverContainer,
  CoverControlGroup,
  CoverSubContainer,
  DeliverWithSkip,
  Headline,
  Quote,
} from "./styles";

function Cover(): ReactElement {
  return (
    <CoverContainer>
      <CoverBackground />
      <CoverSubContainer>
        <CoverControlGroup>
          <Headline>
            <DeliverWithSkip>
              <FormattedMessage id="deliverWithSkip" />
            </DeliverWithSkip>
            <Quote>
              <FormattedMessage id="quote" />
            </Quote>
          </Headline>
          <CourierForm></CourierForm>
        </CoverControlGroup>
      </CoverSubContainer>
    </CoverContainer>
  );
}

export default Cover;
