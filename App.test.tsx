import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import App from "./App";

describe("Happy flow for user", () => {
  it("input field accepts user input", () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input-new-todo");

    fireEvent.changeText(input, "Buy a Christmas tree");

    expect(input.props.value).toBe("Buy a Christmas tree");
  });

  it("new todos are added to list", () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const input = getByTestId("input-new-todo");
    const submit = getByTestId("button-submit-new-todo");

    fireEvent.changeText(input, "Send postal card");
    fireEvent.press(submit);
    fireEvent.changeText(input, "Remove snow from car");
    fireEvent.press(submit);

    const todos = getAllByTestId("todo-text");
    expect(todos.length).toBe(2);
  });

  it("deleted todo is removed from list", async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input-new-todo");
    const submit = getByTestId("button-submit-new-todo");

    fireEvent.changeText(input, "Go to Systembolaget");
    fireEvent.press(submit);
    fireEvent.press(getByTestId("button-delete-todo"));

    expect(() => getByTestId("todo-text")).toThrow()
  });
});
