/* eslint-disable react/display-name */
import React, { ReactElement } from "react";
import { FormattedMessage, injectIntl, useIntl } from "react-intl";
import {
  CreateAccountButton,
  FormCheckboxField,
  FormContainer,
  FormField,
  FormFieldGroup,
  FormInput,
  FormLabel,
  FormTitle,
  InputCover,
  LoginMessage,
  StyledSelect,
} from "./styles";
import cities from "../../data/cities";
import languages from "../../data/languages";

const selectStyle = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: (provided: any) => ({
    ...provided,
    borderWidth: "0px",
    borderRadius: "0px",
    outline: "none",
    borderBottom: "1px solid #0000006b",
  }),
};

export function moveToApplyForm(): void {
  const applyForm = document.querySelector("#apply-form-container");
  if (applyForm) {
    applyForm.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function CourierForm(): ReactElement {
  const intl = useIntl();

  return (
    <FormContainer id="apply-form-container">
      <FormTitle>
        <FormattedMessage id="signUpNow" />
      </FormTitle>
      <form id="apply">
        <FormFieldGroup>
          <FormField>
            <FormLabel htmlFor="firstName-signup" top>
              <FormattedMessage id="firstName" /> *
            </FormLabel>
            <InputCover>
              <FormInput
                type="text"
                id="firstName-signup"
                autoComplete="firstName"
                name="firstName"
                required
              ></FormInput>
            </InputCover>
          </FormField>
          <FormField>
            <FormLabel htmlFor="lastName-signup" top>
              <FormattedMessage id="lastName" /> *
            </FormLabel>
            <InputCover>
              <FormInput
                type="text"
                id="lastName-signup"
                autoComplete="lastName"
                name="lastName"
                required
              ></FormInput>
            </InputCover>
          </FormField>
        </FormFieldGroup>
        <FormField>
          <FormLabel htmlFor="email-signup" top>
            <FormattedMessage id="email" /> *
          </FormLabel>
          <InputCover>
            <FormInput
              type="text"
              id="email-signup"
              autoComplete="email"
              name="email"
              required
            ></FormInput>
          </InputCover>
        </FormField>
        <FormField>
          <FormLabel htmlFor="phone-signup" top>
            <FormattedMessage id="mobilePhone" /> *
          </FormLabel>
          <InputCover>
            <FormInput
              type="text"
              id="phone-signup"
              autoComplete="phone"
              name="phone"
              required
            ></FormInput>
          </InputCover>
        </FormField>

        <FormField>
          <FormLabel htmlFor="city-select-signup" top>
            <FormattedMessage id="city" />
          </FormLabel>
          <InputCover>
            <StyledSelect
              placeholder={intl.formatMessage({ id: "select" })}
              name="city-select-signup"
              id="city-select-signup"
              styles={selectStyle}
              options={cities}
            />
          </InputCover>
        </FormField>

        <FormField>
          <FormLabel htmlFor="city-select-signup" top>
            <FormattedMessage id="preferredContactLanguage" />
          </FormLabel>
          <InputCover>
            <StyledSelect
              placeholder={intl.formatMessage({ id: "select" })}
              name="city"
              id="city-select-signup"
              styles={selectStyle}
              options={languages}
            />
          </InputCover>
        </FormField>

        <FormCheckboxField>
          <input
            type="checkbox"
            name="courierAgreement"
            id="courierAgreementCheck-box"
          />
          <div>
            <FormattedMessage
              id="courrierAgreementMessage"
              values={{
                courierAgreementLink: (chunks: string) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://couriers.skipthedishes.com/help/legal#agreement"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </div>
        </FormCheckboxField>

        <FormCheckboxField>
          <input
            type="checkbox"
            name="privacyAndTerms"
            id="privacyAndTermsCheck-box"
          />
          <div>
            <FormattedMessage
              id="privacyPolicyMessage"
              values={{
                privacyPolicyLink: (chunks: string) => (
                  <a
                    id="privacy-policy-link"
                    href="https://skipthedishes.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
                termsOfServiceLink: (chunks: string) => (
                  <a
                    id="terms-service-link"
                    href="https://skipthedishes.com/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </div>
        </FormCheckboxField>

        <CreateAccountButton>
          <FormattedMessage id="createAccount" />
        </CreateAccountButton>

        <LoginMessage>
          <FormattedMessage
            id="alreadyHaveAccountMessage"
            values={{
              loginLink: (chunks: string) => (
                <a
                  id="login-link-signup"
                  href="https://couriers.skipthedishes.com/login"
                >
                  {chunks}
                </a>
              ),
            }}
          />
        </LoginMessage>
      </form>
    </FormContainer>
  );
}

export default injectIntl(CourierForm);
