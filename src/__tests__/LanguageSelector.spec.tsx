import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";

describe("LanguageSelector", () => {
  describe("when load the app", () => {
    it("render in english", () => {
      const { getByText } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      getByText(/Sign Up Now/i);
    });
  });

  describe("when swith the language to français and back to english", () => {
    it("render in français and return to english", () => {
      const { getAllByText, getByText, getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const francaisSelector = getByTestId("francais-selector");
      const englishSelector = getByTestId("english-selector");

      fireEvent.click(francaisSelector);

      getAllByText(/Inscrivez-vous/i);

      fireEvent.click(englishSelector);

      getByText(/Sign Up Now/i);
    });
  });

  describe("when click two times on the language expand/shrink button", () => {
    it("should shrink and expand the languages list", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const languageSwitcher = getByTestId("language-switcher");
      const languagesList = getByTestId("languages-list");

      expect(languagesList).toHaveStyle("opacity: 1.0");
      fireEvent.click(languageSwitcher);
      expect(languagesList).toHaveStyle("opacity: 0.0");
      fireEvent.click(languageSwitcher);
      expect(languagesList).toHaveStyle("opacity: 1.0");
    });
  });
});
