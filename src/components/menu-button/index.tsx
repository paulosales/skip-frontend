import React, { HTMLAttributes, ReactElement } from "react";
import MaterialIcon from "../material-icon";
import { HamburgerMenuButton } from "./styles";

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
