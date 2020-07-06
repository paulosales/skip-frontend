import React, { ReactElement } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import MenuButton from "./MenuButton";
import { showAppMenu } from "../redux/app-menu/actions";
import device from "../responsive/device";
import { RootState } from "../redux/root-reducer";
import { ENGLISH } from "../redux/language-selector/types";

const HeaderContainer = styled.header`
  position: relative;
  top: 0px;
  height: 80px;
  display: flex;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
  background-color: transparent;
  z-index: 1100;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

const HeaderLogo = styled.div<{ lang: string }>`
  background-image: url(assets/skip-sm.svg);
  background-repeat: no-repeat;
  width: ${(props) => (props.lang === ENGLISH ? "132px" : "157px")};
  height: 31px;

  @media ${device.laptop} {
    background-image: url(assets/${(props) => (props.lang === ENGLISH ? "skip-lg-en.svg" : "skip-lg-fr.svg")});
  }
`;

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
