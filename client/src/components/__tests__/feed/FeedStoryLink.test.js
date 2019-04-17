import React from "react";
import { shallow } from "enzyme";
import FeedStoryLink from "../../feed/FeedStoryLink";

describe("<FeedStoryLink />", () => {
  const props = {
    url: "a url",
    title: "a title"
  };
  const wrapper = shallow(<FeedStoryLink {...props} />);

  it("should have the right elements", () => {
    expect(wrapper.type()).toBe("a");
    expect(wrapper.find("a")).toHaveClassName("feed-story-item");
    expect(wrapper.find("a").prop("href")).toBe(props.url);
    expect(wrapper.find("a").prop("title")).toBe(props.title);
  });
});
