import React from "react";
import { shallow } from "enzyme";
import FeedStoryFooter from "../../feed/FeedStoryFooter";

describe("<FeedStoryFooter />", () => {
  const props = {
    url: "a url"
  };
  const wrapper = shallow(<FeedStoryFooter {...props} />);

  it("should have the right elements", () => {
    expect(wrapper.type()).toBe("a");
    expect(wrapper.find("a")).toHaveClassName("feed-story-footer");
    expect(wrapper.find("a")).toHaveText(props.url);
    expect(wrapper.find("a").prop("href")).toBe(props.url);
  });
});
