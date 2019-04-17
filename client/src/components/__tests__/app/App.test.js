import React from "react";
import { shallow } from "enzyme";

import App from "../../app/App";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Content from "../../layout/Content";

describe("<App />", () => {
  const wrapper = shallow(<App />);

  it("contains the right components", () => {
    expect(wrapper).toContainReact(<Header />);
    expect(wrapper).toContainReact(<Content />);
    expect(wrapper).toContainReact(<Footer />);
  });

  it("has className called App", () => {
    expect(wrapper).toHaveClassName("App");
  });

  it("has 1 div as a parent node", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
