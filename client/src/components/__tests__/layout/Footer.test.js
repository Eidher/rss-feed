import React from "react";
import { shallow } from "enzyme";
import Footer from "../../layout/Footer";

describe("<Footer />", () => {
  const wrapper = shallow(<Footer />);

  it("renders correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
