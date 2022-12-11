import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import renderer from "react-test-renderer";

describe("Smoketest for <App />", () => {
  it("it should render", () => {
    const tree = renderer.create(<App />);
    expect(tree).toBeTruthy;
  });
});
