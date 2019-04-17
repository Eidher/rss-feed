import React from "react";
import { shallow } from "enzyme";
import HomeImage from "../../home/HomeImage";

describe("<HomeImage />", () => {
  const props = { image: "path-to-image" };
  const wrapper = shallow(<HomeImage {...props} />);

  it("renders correctly.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the right propos ", () => {
    expect(wrapper.find("img")).toHaveProp("src");
    expect(wrapper.find("img").prop("src")).toBe(props.image);
  });
});
