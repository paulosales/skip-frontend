import React, { HTMLAttributes, ReactElement } from "react";
import styled from "styled-components";
import MaterialIcon from "./MaterialIcon";

const HamburgerMenuButton = styled.button`
  color: #fff;
  border: 0;
  background-color: transparent;

  &:focus {
    outline: 0;
  }
`;

function MenuButton(props: HTMLAttributes<HTMLElement>): ReactElement {
  return (
    <HamburgerMenuButton
      data-testid="app-menu-button"
      type="button"
      aria-label="Open Menu"
      {...props}
    >
      <MaterialIcon aria-hidden="true">menu</MaterialIcon>
    </HamburgerMenuButton>
  );
}

export default MenuButton;
