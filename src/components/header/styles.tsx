import styled from "styled-components";
import device from "../../responsive/device";
import { FRANCAIS_CA } from "../../redux/language-selector/types";

export const HeaderContainer = styled.header`
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

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HeaderLogo = styled.div<{ lang: string }>`
  background-image: url(assets/skip-sm.svg);
  background-repeat: no-repeat;
  width: ${(props) => (props.lang === FRANCAIS_CA ? "157px" : "132px")};
  height: 31px;

  @media ${device.laptop} {
    background-image: url(assets/${(props) => (props.lang === FRANCAIS_CA ? "skip-lg-fr.svg" : "skip-lg-en.svg")});
  }
`;
