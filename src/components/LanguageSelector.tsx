import React, { ReactElement } from "react";
import styled from "styled-components";
import MaterialIcon from "./MaterialIcon";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { ENGLISH, FRANCAIS } from "../redux/language-selector/types";
import {
  toggleLanguageItems,
  selectLanguage,
} from "../redux/language-selector/actions";

const LanguageSelectorContainer = styled.div``;

const LanguageSelectorHeader = styled.div`
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

const LanguageSelectorIcon = styled(MaterialIcon)`
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 16px;
  color: rgb(121, 137, 160);
  font-size: 32px;
  user-select: none;
`;

const LanguageSelectorTitle = styled.div`
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

const LanguageSelectorSwitcher = styled(MaterialIcon)<{ expanded?: boolean }>`
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

const LanguagesList = styled.div<{ expanded?: boolean }>`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  padding-left: 16px;
  overflow-y: hidden;

  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  max-height: ${(props) => (props.expanded ? "96px" : "0px")};
  opacity: ${(props) => (props.expanded ? "1.0" : "0.0")};
`;

const Language = styled.label`
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

const LanguageTitle = styled.span`
  color: rgb(121, 137, 160);
  font-family: CoreSansA65;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 22.4px;
  text-align: left;
`;

const RadioButton = styled.input``;

export default function LanguageSelector(): ReactElement {
  const { expanded, selectedLanguage } = useSelector(
    (state: RootState) => state.languageSelector
  );
  const dispatch = useDispatch();

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorHeader>
        <LanguageSelectorIcon>language</LanguageSelectorIcon>
        <LanguageSelectorTitle>Language</LanguageSelectorTitle>
        <LanguageSelectorSwitcher
          onClick={() => {
            dispatch(toggleLanguageItems());
          }}
          expanded={expanded}
        />
      </LanguageSelectorHeader>
      <LanguagesList expanded={expanded}>
        <Language>
          <LanguageTitle>English</LanguageTitle>
          <RadioButton
            type="radio"
            name="language"
            onClick={() => {
              dispatch(selectLanguage(ENGLISH));
            }}
            readOnly
            checked={selectedLanguage === ENGLISH}
          />
        </Language>
        <Language>
          <LanguageTitle>Français</LanguageTitle>
          <RadioButton
            type="radio"
            name="language"
            onClick={() => {
              dispatch(selectLanguage(FRANCAIS));
            }}
            readOnly
            checked={selectedLanguage === FRANCAIS}
          />
        </Language>
      </LanguagesList>
    </LanguageSelectorContainer>
  );
}
