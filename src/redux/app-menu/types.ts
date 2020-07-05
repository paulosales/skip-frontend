export const SHOW_APP_MENU = "SHOW_APP_MENU";
export const HIDE_APP_MENU = "HIDE_APP_MENU";

export interface ShowAppMenuAction {
  type: typeof SHOW_APP_MENU;
}

export interface HideAppMenuAction {
  type: typeof HIDE_APP_MENU;
}

export type AppMenuActionTypes = ShowAppMenuAction | HideAppMenuAction;

export interface AppMenuState {
  visible: boolean;
}
