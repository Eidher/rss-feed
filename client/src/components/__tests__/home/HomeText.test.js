import React from "react";
import { shallow } from "enzyme";
import HomeText from "../../home/HomeText";

describe("<HomeText />", () => {
  const props = {
    mainText: "main text",
    buttonText: "button text samole"
  };
  const wrapper = shallow(<HomeText {...props} />);

  it("should render correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have the right props ", () => {
    expect(wrapper.find("h1")).toHaveText(props.mainText);
    expect(wrapper.find("Link").prop("children")).toBe(props.buttonText);
  });

  it("should have a Link component routing to /feed url", () => {
    expect(wrapper.find("Link")).toHaveProp("to");
    expect(wrapper.find("Link").prop("to")).toBe("/feed");
  });
});
