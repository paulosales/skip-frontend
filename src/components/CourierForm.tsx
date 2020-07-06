/* eslint-disable react/display-name */
import React, { ReactElement } from "react";
import styled from "styled-components";
import Select from "react-select";
import Button from "./Button";
import { FormattedMessage, injectIntl, useIntl } from "react-intl";
import device from "../responsive/device";

const FormContainer = styled.div`
  flex-grow: 1;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 48px 64px 64px;

  @media ${device.laptop} {
    width: 50%;
    border-radius: 4px;
  }
`;

const FormTitle = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA55;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 31.2px;
`;

const FormFieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormLabel = styled.label<{ top?: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.top ? "flex-start" : "flex-end")};
  height: 3rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);

  transform: translate(${(props) => (props.top ? 0 : 2.3)}, 0px)
    scale(${(props) => (props.top ? 0.75 : 1.0)});
  transform-origin: top left;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const FormCheckboxField = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  margin-bottom: 7px;
  margin-top: 24px;
  height: 45px;

  font-size: 0.9rem;

  &:first {
    margin-right: 10px;
  }
`;

const InputCover = styled.div`
  display: inline-flex;
  margin-top: 16px;
  font-size: 1rem;
  flex-grow: 1;
  height: 2.5rem;
`;

const FormInput = styled.input`
  flex-grow: 1;
  height: 1em;
  border: 0;
  font-size: 1.1rem;
  margin-top: 15px;

  ${FormFieldGroup} & {
    flex-grow: unset;
    width: 90%;
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.42);

  &:hover {
    border-bottom-width: 2px;
  }

  &:focus {
    outline: 0;
    border-bottom: 2px solid rgb(163, 14, 34);
  }
`;

const StyledSelect = styled(Select)`
  flex-grow: 1;
  border-width: 0px;
`;

const CreateAccountButton = styled(Button)`
  width: 100%;
  margin-top: 40px;
`;

const LoginMessage = styled.div`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;
`;

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

const cities = [
  { value: 1, label: "Calgary, AB" },
  { value: 1, label: "Vancouver, BC" },
  { value: 2, label: "Winninpeg, MB" },
];

const languages = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];

function CourierForm(): ReactElement {
  const intl = useIntl();

  return (
    <FormContainer>
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
