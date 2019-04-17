import React from "react";
import { shallow } from "enzyme";
import FeedForm from "../../feed/FeedForm";
import { wrap } from "module";

describe("<Home />", () => {
  const props = {
    addFeed: jest.fn(),
    cleanFormError: jest.fn(),
    isAddingFeed: false,
    error: { list: "", form: "" }
  };
  const wrapper = shallow(<FeedForm {...props} />);

  it("should have the right elements", () => {
    expect(wrapper.type()).toBe("div");
    expect(wrapper.find(".title")).toHaveText("Add your feed!");
    expect(wrapper.find("input")).toExist();
    expect(wrapper.find("button")).toExist();
  });
});
