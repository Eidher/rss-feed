import React from "react";
import { shallow } from "enzyme";
import FeedError from "../../feed/FeedError";

describe("<Home />", () => {
  const props = { message: "an error message" };
  const wrapper = shallow(<FeedError {...props} />);

  it("should have the right elements", () => {
    expect(wrapper.type()).toBe("div");
    expect(wrapper.find(".header").type()).toBe("div");
    expect(wrapper.find("img")).toHaveClassName("logo");
    expect(wrapper.find("img").prop("src")).toBeTruthy();
    expect(wrapper.find(".main")).toHaveText(
      "But don't panic! It mus be something simple..."
    );
    expect(wrapper.find(".message")).toHaveText(props.message);
  });
});
