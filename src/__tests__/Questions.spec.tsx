import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

describe("Question", () => {
  describe("When toggle the first question two times", () => {
    it("should expand and shrink", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const questionToggleButton = getByTestId("question-button1");
      const question = getByTestId("question1");
      expect(question).toHaveStyle("max-height: 70px");
      fireEvent.click(questionToggleButton);
      expect(question).toHaveStyle("max-height: 400px");
      fireEvent.click(questionToggleButton);
      expect(question).toHaveStyle("max-height: 70px");
    });
  });
});
