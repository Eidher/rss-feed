import React from "react";
import { shallow } from "enzyme";
import Content from "../../layout/Content";

describe("<Content />", () => {
  const wrapper = shallow(<Content />);

  it("should render correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have 4 Route components", () => {
    expect(wrapper).toContainMatchingElements(4, "Route");
  });

  it("should have the right Routes and paths", () => {
    wrapper.find("Route").forEach((node, index) => {
      if (index === 0) {
        expect(node).toHaveProp("component");
      } else {
        expect(node).toHaveProp("path");
      }

      if (index === 1) {
        expect(node.prop("path")).toBe("/");
      }

      if (index === 2) {
        expect(node.prop("path")).toBe("/feed");
      }

      if (index === 3) {
        expect(node.prop("path")).toBe("/contact");
      }
    });
  });

  it("should be of type main element", () => {
    expect(wrapper.type()).toBe("main");
  });
});
