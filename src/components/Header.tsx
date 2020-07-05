import React, { ReactElement } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { showAppMenu } from "../redux/app-menu/actions";
import { useDispatch } from "react-redux";

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

function Header(): ReactElement {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <HeaderRow>
        <img
          alt="Skip The Dishes Logo"
          draggable="false"
          src="assets/SkipLogo-Light.svg"
        />
        <MenuButton onClick={() => dispatch(showAppMenu())} />
      </HeaderRow>
    </HeaderContainer>
  );
}

export default Header;
