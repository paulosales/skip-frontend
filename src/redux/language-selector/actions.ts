import {
  TOGGLE_LANGUAGE_ITEMS,
  SELECT_LANGUAGE,
  LanguageSelectorActionTypes,
} from "./types";

export function toggleLanguageItems(): LanguageSelectorActionTypes {
  return {
    type: TOGGLE_LANGUAGE_ITEMS,
  };
}

export function selectLanguage(language: string): LanguageSelectorActionTypes {
  return {
    type: SELECT_LANGUAGE,
    playload: language,
  };
}
