import {
  AppMenuActionTypes,
  SHOW_APP_MENU,
  HIDE_APP_MENU,
  AppMenuState,
} from "./types";

const INITIAL_STATE = {
  visible: false,
};

function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "unset";
}

export function appMenuReducer(
  state: AppMenuState = INITIAL_STATE,
  action: AppMenuActionTypes
): AppMenuState {
  switch (action.type) {
    case SHOW_APP_MENU:
      lockScroll();
      return { ...state, visible: true };
    case HIDE_APP_MENU:
      unlockScroll();
      return { ...state, visible: false };
    default:
      return state;
  }
}
