import React, { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import { moveToApplyForm } from "../courier-form/CourierForm";
import {
  GetStartedBox,
  GetStartedButton,
  GetStartedButtonBox,
  GetStartedContainer,
  GetStartedStep,
  GetStartedStepDescription,
  GetStartedStepList,
  GetStartedStepTitle,
  GetStartedTitle,
} from "./styles";
import getStartedSteps from "../../data/get-started-steps";

function GetStarted(): ReactElement {
  return (
    <GetStartedContainer>
      <GetStartedBox>
        <GetStartedTitle>
          <FormattedMessage id="howToGetStarted" />
        </GetStartedTitle>
        <GetStartedStepList>
          {getStartedSteps.map((step) => {
            return (
              <GetStartedStep key={step.titleId}>
                <GetStartedStepTitle>
                  <FormattedMessage id={step.titleId} />
                </GetStartedStepTitle>
                <GetStartedStepDescription>
                  <FormattedMessage id={step.descriptionId} />
                </GetStartedStepDescription>
              </GetStartedStep>
            );
          })}
        </GetStartedStepList>
        <GetStartedButtonBox>
          <GetStartedButton
            onClick={() => {
              moveToApplyForm();
            }}
          >
            <FormattedMessage id="applyNow" />
          </GetStartedButton>
        </GetStartedButtonBox>
      </GetStartedBox>
    </GetStartedContainer>
  );
}

export default GetStarted;
