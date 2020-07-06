import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import store from "../redux/store";

describe("AppMenu", () => {
  describe("when click two times at AppMenuButton", () => {
    it("should shown and hide the app menu", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const appMenu = getByTestId("app-menu");

      const appMenuButton = getByTestId("app-menu-button");
      const appMenuScreenBlocker = getByTestId("app-menu-screen-blocker");
      expect(appMenu).toHaveStyle("opacity: 0.0");
      fireEvent.click(appMenuButton);
      expect(appMenu).toHaveStyle("opacity: 1.0");
      fireEvent.click(appMenuScreenBlocker);
      expect(appMenu).toHaveStyle("opacity: 0.0");
    });
  });

  describe("when open the app menu", () => {
    it("should frozen the page scrolling", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const appMenuButton = getByTestId("app-menu-button");

      fireEvent.click(appMenuButton);

      expect(document.body).toHaveStyle("overflow: hidden");
    });
  });
});
