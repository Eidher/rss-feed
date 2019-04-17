import React from "react";
import { shallow } from "enzyme";
import Home from "../../home/Home";

describe("<Home />", () => {
  const wrapper = shallow(<Home />);

  it("has HomeText component in it with the right props", () => {
    const homeText = wrapper.find("HomeText");
    expect(homeText).toExist();

    expect(homeText).toHaveProp("mainText");
    expect(homeText.prop("mainText")).toBeTruthy();

    expect(homeText).toHaveProp("buttonText");
    expect(homeText.prop("buttonText")).toBeTruthy();
  });

  it("has HomeImage component in it with the right props", () => {
    const homeImage = wrapper.find("HomeImage");
    expect(homeImage).toExist();
    expect(homeImage).toHaveProp("image");
    expect(homeImage.prop("image")).toBeTruthy();
  });
});
