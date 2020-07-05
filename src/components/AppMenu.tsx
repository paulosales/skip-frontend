import React, { ReactElement } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import LanguageSelector from "./LanguageSelector";
import { RootState } from "../redux/root-reducer";
import { hideAppMenu } from "../redux/app-menu/actions";

const AppMenuContainer = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  outline: none;
  position: fixed;
  z-index: 1200;
  overflow-y: auto;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  transform: translate(${(props) => (props.visible ? "0px" : "300px")}, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const AppMenuScreenBlocker = styled.div<{ visible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  display: ${(props) => (props.visible ? "block" : "none")};
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const AppMenuBox = styled.div`
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  box-sizing: border-box;
  padding-bottom: max(env(safe-area-inset-bottom), 0px);
  padding-top: max(env(safe-area-inset-top), 0px);
  width: calc(env(safe-area-inset-right) + 300px);
`;

const Copyright = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA45;
  font-size: 12px;
  letter-spacing: 0.25px;
  line-height: 16.8px;
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

function AppMenu(): ReactElement {
  const { visible } = useSelector((state: RootState) => state.appMenu);
  const dispatch = useDispatch();

  return (
    <div>
      <AppMenuContainer visible={visible}>
        <AppMenuBox>
          <LanguageSelector />
          <Copyright>© 2020 SkipTheDishes</Copyright>
        </AppMenuBox>
      </AppMenuContainer>
      <AppMenuScreenBlocker
        onClick={() => {
          dispatch(hideAppMenu());
        }}
        visible={visible}
      />
    </div>
  );
}

export default AppMenu;
