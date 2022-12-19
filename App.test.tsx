import React from 'react';
import App from './App';
import renderer from "react-test-renderer";
import {render } from "@testing-library/react-native";


// Wanted to do TDD, BUT need to spend more time on how to properly setup test env with Expo / React Native / TS

describe("Smoketest for <App />", () => {
  it("renders the submit button", () => {
    const { getByText } = render(<App />);
    const submitButton = getByText("Add todo");
    expect(submitButton).toBeTruthy;
  });
});
