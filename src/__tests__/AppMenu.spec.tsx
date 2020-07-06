import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import store from "../redux/store";

describe("AppMenu", () => {
  describe("Click two time at AppMenuButton", () => {
    it("should shown and hide the app menu", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const appMenuEl = getByTestId("app-menu");

      const appMenuButtonEl = getByTestId("app-menu-button");
      const appMenuScreenBlocker = getByTestId("app-menu-screen-blocker");
      expect(appMenuEl).toHaveStyle("opacity: 0.0");
      fireEvent.click(appMenuButtonEl);
      expect(appMenuEl).toHaveStyle("opacity: 1.0");
      fireEvent.click(appMenuScreenBlocker);
      expect(appMenuEl).toHaveStyle("opacity: 0.0");
    });
  });
});
