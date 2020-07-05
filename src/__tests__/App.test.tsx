import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

test("renders skip the dishes courier page", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/Sign Up Now/i);
  expect(linkElement).toBeInTheDocument();
});
