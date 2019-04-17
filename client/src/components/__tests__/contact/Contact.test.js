import React from "react";
import { shallow } from "enzyme";
import Contact from "../../contact/Contact";

describe("<Contact />", () => {
  const wrapper = shallow(<Contact />);

  it("renders correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
