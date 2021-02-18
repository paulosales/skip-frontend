import styled from "styled-components";
import MaterialIcon from "../material-icon";

export const LanguageSelectorContainer = styled.div``;

export const LanguageSelectorHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80px;

  padding-left: 16px;
  padding-right: max(env(safe-area-inset-right), 16px);
  padding-top: 12px;
  padding-bottom: 12px;

  box-sizing: border-box;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const LanguageSelectorIcon = styled(MaterialIcon)`
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 16px;
  color: rgb(121, 137, 160);
  font-size: 32px;
  user-select: none;
`;

export const LanguageSelectorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1;
  color: rgb(121, 137, 160);
  font-family: CoreSansA65;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 22.4px;
  text-align: left;
`;

export const LanguageSelectorSwitcher = styled(MaterialIcon)<{
  expanded?: boolean;
}>`
  color: rgb(121, 137, 160);
  font-size: 32px;
  flex-shrink: 0;
  margin-right: 16px;
  width: 1em;
  height: 1em;
  overflow: hidden;
  user-select: none;
  transition: transform 0.5s ease-out;
  transform: rotate(${(props) => (props.expanded ? "0deg" : "180deg")});

  &:after {
    content: "keyboard_arrow_up";
  }
`;

export const LanguagesList = styled.div<{ expanded?: boolean }>`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  padding-left: 16px;
  overflow-y: hidden;

  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  max-height: ${(props) => (props.expanded ? "144px" : "0px")};
  opacity: ${(props) => (props.expanded ? "1.0" : "0.0")};
`;

export const Language = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  padding-left: 32px;
  cursor: pointer;
  margin-left: -14px;
  margin-right: 16px;
  height: 48px;
  vertical-align: middle;
`;

export const LanguageTitle = styled.span`
  color: rgb(121, 137, 160);
  font-family: CoreSansA65;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 22.4px;
  text-align: left;
`;

export const RadioButton = styled.input``;
