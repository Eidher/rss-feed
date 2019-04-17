import React from "react";
import { shallow } from "enzyme";
import Footer from "../../layout/Footer";

describe("<Footer />", () => {
  const wrapper = shallow(<Footer />);

  it("renders correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not update component", () => {
    const component = new Footer({});
    expect(component.shouldComponentUpdate()).toBe(false);
  });

  it("should have the right Links and locations", () => {
    expect(wrapper).toContainMatchingElements(3, "Link");
    wrapper.find("Link").forEach(node => {
      expect(node).toHaveProp("to");
    });
  });
});
