import React, { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import { moveToApplyForm } from "../courier-form/CourierForm";
import { FooterButton, FooterContainer, FooterTitle } from "./styles";

function Footer(): ReactElement {
  return (
    <FooterContainer>
      <FooterTitle>
        <FormattedMessage id="deliverWithSkip" />
      </FooterTitle>
      <FooterButton
        onClick={() => {
          moveToApplyForm();
        }}
      >
        <FormattedMessage id="applyNow" />
      </FooterButton>
    </FooterContainer>
  );
}

export default Footer;
