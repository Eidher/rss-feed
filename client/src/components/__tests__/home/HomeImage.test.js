import React from "react";
import { shallow } from "enzyme";
import HomeImage from "../../home/HomeImage";

describe("<HomeImage />", () => {
  const props = { image: "path-to-image" };
  const wrapper = shallow(<HomeImage {...props} />);

  it("should render correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should receive the right props ", () => {
    expect(wrapper.find("img")).toHaveProp("src");
    expect(wrapper.find("img").prop("src")).toBe(props.image);
  });
});
