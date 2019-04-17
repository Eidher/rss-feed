import React from "react";
import { shallow } from "enzyme";
import Feed from "../../feed/Feed";

describe("<Home />", () => {
  const wrapper = shallow(<Feed />);

  it("should have the right elements", () => {
    expect(wrapper.type()).toBe("section");
    expect(wrapper).toContainMatchingElements(2, "ConnectFunction");
    expect(wrapper.find("div")).toHaveClassName("container");
  });
});
