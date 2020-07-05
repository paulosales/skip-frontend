import React, { ReactElement } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { showAppMenu } from "../redux/app-menu/actions";
import { useDispatch } from "react-redux";
import device from "../responsive/devices";

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

const HeaderLogo = styled.div`
  background-image: url(assets/Skip.svg);
  background-repeat: no-repeat;
  width: 132px;
  height: 31px;

  @media ${device.laptop} {
    background-image: url(assets/SkipLogo-Light.svg);
  }
`

function Header(): ReactElement {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <HeaderRow>
        <HeaderLogo/>
        <MenuButton onClick={() => dispatch(showAppMenu())} />
      </HeaderRow>
    </HeaderContainer>
  );
}

export default Header;
