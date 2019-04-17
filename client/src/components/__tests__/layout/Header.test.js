import React from "react";
import renderer from "react-test-renderer";

import Header from "../../layout/Header";

describe("<Header />", () => {
  const wrapper = renderer.create(<Header />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
