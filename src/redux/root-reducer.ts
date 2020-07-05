import { combineReducers } from "redux";
import { languageSelectorReducer } from "./language-selector/reducer";
import { appMenuReducer } from "./app-menu/reducer";

const rootReducer = combineReducers({
  languageSelector: languageSelectorReducer,
  appMenu: appMenuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
