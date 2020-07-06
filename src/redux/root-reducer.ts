import { combineReducers } from "redux";
import { languageSelectorReducer } from "./language-selector/reducer";
import { appMenuReducer } from "./app-menu/reducer";
import { questionReducer } from "./questions/reducer";

const rootReducer = combineReducers({
  languageSelector: languageSelectorReducer,
  appMenu: appMenuReducer,
  question: questionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
