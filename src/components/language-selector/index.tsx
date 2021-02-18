import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import languages from "../../data/languages";

import {
  toggleLanguageItems,
  selectLanguage,
} from "../../redux/language-selector/actions";
import {
  Language,
  LanguageSelectorContainer,
  LanguageSelectorHeader,
  LanguageSelectorIcon,
  LanguageSelectorSwitcher,
  LanguageSelectorTitle,
  LanguagesList,
  LanguageTitle,
  RadioButton,
} from "./styles";
import { FormattedMessage } from "react-intl";

export default function LanguageSelector(): ReactElement {
  const { expanded, selectedLanguage } = useSelector(
    (state: RootState) => state.languageSelector
  );
  const dispatch = useDispatch();

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorHeader>
        <LanguageSelectorIcon>language</LanguageSelectorIcon>
        <LanguageSelectorTitle>
          <FormattedMessage id="language" />{" "}
        </LanguageSelectorTitle>
        <LanguageSelectorSwitcher
          data-testid="language-switcher"
          onClick={() => {
            dispatch(toggleLanguageItems());
          }}
          expanded={expanded}
        />
      </LanguageSelectorHeader>
      <LanguagesList data-testid="languages-list" expanded={expanded}>
        {languages.map((lang) => {
          return (
            <Language key={lang.value}>
              <LanguageTitle>{lang.label}</LanguageTitle>
              <RadioButton
                type="radio"
                name="language"
                data-testid={lang.testid}
                onClick={() => {
                  dispatch(selectLanguage(lang.value));
                }}
                readOnly
                checked={selectedLanguage === lang.value}
              />
            </Language>
          );
        })}
      </LanguagesList>
    </LanguageSelectorContainer>
  );
}
