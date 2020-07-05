export const TOGGLE_LANGUAGE_ITEMS = "TOGGLE_LANGUAGE_ITEMS";
export const SELECT_LANGUAGE = "SELECT_LANGUAGE";
export const ENGLISH = "en-CA";
export const FRANCAIS = "fr-CA";

interface ExpandLanguageItemsAction {
  type: typeof TOGGLE_LANGUAGE_ITEMS;
}

interface SelectLanguageAction {
  type: typeof SELECT_LANGUAGE;
  playload: string;
}

export type LanguageSelectorActionTypes =
  | ExpandLanguageItemsAction
  | SelectLanguageAction;

export interface LanguageSelectorState {
  expanded: boolean;
  selectedLanguage: string;
}
