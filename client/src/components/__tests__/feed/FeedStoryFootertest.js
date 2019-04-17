import React from "react";
import { shallow } from "enzyme";
import FeedStoryFooter from "../../feed/FeedStoryFooter";

describe("<Home />", () => {
  const props = {
    name: "a name",
    description: "a description"
  };
  const wrapper = shallow(<FeedStoryFooter {...props} />);

  it("should have the right elements", () => {
    expect(wrapper.type()).toBe(Symbol("react.fragment"));
    expect(wrapper).toContainMatchingElements(2, "div");
    expect(wrapper.find("div")).toHaveClassName("card-header");
    expect(wrapper.find("div")).toHaveClassName("card-subtitle");
    expect(wrapper.find(".card-header")).toHaveText(props.name);
    expect(wrapper.find(".card-subtitle")).toHaveText(props.description);
  });
});
