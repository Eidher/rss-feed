import React from "react";
import { shallow } from "enzyme";
import Header from "../../layout/Header";

describe("<Header />", () => {
  const wrapper = shallow(<Header />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not update component", () => {
    const component = new Header({});
    expect(component.shouldComponentUpdate()).toBe(false);
  });

  it("should have the right Links and locations", () => {
    expect(wrapper).toContainMatchingElements(4, "Link");
    wrapper.find("Link").forEach((node, index) => {
      expect(node).toHaveProp("to");

      if (index === 1 || index === 2) {
        expect(node.prop("to")).toBe("/");
      }

      if (index === 2) {
        expect(node.prop("path")).toBe("/feed");
      }

      if (index === 3) {
        expect(node.prop("path")).toBe("/contact");
      }
    });
  });

  it("should be of type nav element", () => {
    expect(wrapper.type()).toBe("nav");
  });
});
