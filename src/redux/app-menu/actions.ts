import {
  SHOW_APP_MENU,
  ShowAppMenuAction,
  HideAppMenuAction,
  HIDE_APP_MENU,
} from "./types";

export function showAppMenu(): ShowAppMenuAction {
  return { type: SHOW_APP_MENU };
}

export function hideAppMenu(): HideAppMenuAction {
  return { type: HIDE_APP_MENU };
}
