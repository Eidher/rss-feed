import React from "react";
import { shallow } from "enzyme";
import HomeText from "../../home/HomeText";

describe("<HomeText />", () => {
  const props = {
    mainText: "main text",
    buttonText: "button text samole"
  };
  const wrapper = shallow(<HomeText {...props} />);

  it("renders correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the right props ", () => {
    expect(wrapper.find("h1")).toHaveText(props.mainText);
    expect(wrapper.find("a")).toHaveText(props.buttonText);
  });
});
