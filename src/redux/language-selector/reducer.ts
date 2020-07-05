import {
  LanguageSelectorState,
  LanguageSelectorActionTypes,
  SELECT_LANGUAGE,
  TOGGLE_LANGUAGE_ITEMS,
  ENGLISH,
} from "./types";

const INITIAL_STATE: LanguageSelectorState = {
  expanded: true,
  selectedLanguage: ENGLISH,
};

export function languageSelectorReducer(
  state = INITIAL_STATE,
  action: LanguageSelectorActionTypes
): LanguageSelectorState {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return { ...state, selectedLanguage: action.playload };
    case TOGGLE_LANGUAGE_ITEMS:
      return { ...state, expanded: !state.expanded };
    default:
      return state;
  }
}
