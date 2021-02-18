import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import LanguageSelector from "../language-selector";
import { RootState } from "../../redux/root-reducer";
import { hideAppMenu } from "../../redux/app-menu/actions";
import {
  AppMenuBox,
  AppMenuContainer,
  AppMenuScreenBlocker,
  Copyright,
} from "./styles";

function AppMenu(): ReactElement {
  const { visible } = useSelector((state: RootState) => state.appMenu);
  const dispatch = useDispatch();

  return (
    <div>
      <AppMenuContainer data-testid="app-menu" visible={visible}>
        <AppMenuBox>
          <LanguageSelector />
          <Copyright>© 2020 SkipTheDishes</Copyright>
        </AppMenuBox>
      </AppMenuContainer>
      <AppMenuScreenBlocker
        data-testid="app-menu-screen-blocker"
        onClick={() => {
          dispatch(hideAppMenu());
        }}
        visible={visible}
      />
    </div>
  );
}

export default AppMenu;
