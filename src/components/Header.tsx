import React from 'react'
import styled from 'styled-components'

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
  width: 100vw;
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`

const HamburgerMenu = styled.button`
  color: #fff;
  border: 0;
  background-color: transparent;

  &:focus {
    outline: 0;
  }
`

 function Header() {
  return (<HeaderContainer>
      <HeaderRow>
        <img alt="Skip The Dishes Logo" draggable="false" src="assets/SkipLogo-Light.svg"/>
        <HamburgerMenu type="button" aria-label="Open Menu">
          <span>
            <span className="material-icons" aria-hidden="true">menu</span>
          </span>
          <span></span>
        </HamburgerMenu>
      </HeaderRow>
    </HeaderContainer>
  );
}

export default Header