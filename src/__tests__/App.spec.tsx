import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

describe("App", () => {
  describe("when render the start page", () => {
    it("should render 'Deliver with Skip' and 'Sign Up Now' at page cover", () => {
      const { getByText, getAllByText } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const signupNowElement = getByText(/Sign Up Now/i);
      const deliverWithSkipElement = getAllByText(/Deliver with Skip/i);

      expect(signupNowElement).toBeInTheDocument();
      expect(deliverWithSkipElement).toHaveLength(2);
    });
  });
});
