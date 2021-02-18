import styled from "styled-components";
import Select from "react-select";

import device from "../../responsive/device";
import Button from "../button";

export const FormContainer = styled.div`
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

export const FormTitle = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA55;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 31.2px;
`;

export const FormFieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormLabel = styled.label<{ top?: boolean }>`
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

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const FormCheckboxField = styled.div`
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

export const InputCover = styled.div`
  display: inline-flex;
  margin-top: 16px;
  font-size: 1rem;
  flex-grow: 1;
  height: 2.5rem;
`;

export const FormInput = styled.input`
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

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  border-width: 0px;
`;

export const CreateAccountButton = styled(Button)`
  width: 100%;
  margin-top: 40px;
`;

export const LoginMessage = styled.div`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;
`;
