import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuButton from "../menu-button";
import { showAppMenu } from "../../redux/app-menu/actions";
import { RootState } from "../../redux/root-reducer";
import { HeaderContainer, HeaderLogo, HeaderRow } from "./styles";

function Header(): ReactElement {
  const dispatch = useDispatch();
  const { selectedLanguage } = useSelector(
    (state: RootState) => state.languageSelector
  );
  return (
    <HeaderContainer>
      <HeaderRow>
        <HeaderLogo lang={selectedLanguage} />
        <MenuButton onClick={() => dispatch(showAppMenu())} />
      </HeaderRow>
    </HeaderContainer>
  );
}

export default Header;
