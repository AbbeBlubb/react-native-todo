import React from 'react';
import App from '../App';
import renderer from "react-test-renderer";
import {render, fireEvent, screen} from '@testing-library/react'

// Wanted to do TDD, BUT need to spend more time on how to properly setup test env with Expo / React Native / TS

describe("Smoketest for <App />", () => {
  it("it should render the component tree", () => {
    const tree = renderer.create(<App />);
    expect(tree).toBeTruthy;
  });
});
