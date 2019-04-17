import React from "react";
import { shallow } from "enzyme";

import App from "../../app/App";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Content from "../../layout/Content";

describe("<App />", () => {
  const wrapper = shallow(<App />);

  it("contains the right components", () => {
    expect(wrapper).toContainExactlyOneMatchingElement("BrowserRouter");
    expect(wrapper).toContainReact(<Header />);
    expect(wrapper).toContainReact(<Content />);
    expect(wrapper).toContainReact(<Footer />);
  });

  it("has one parent div with className .App", () => {
    expect(wrapper).toContainMatchingElements(1, ".App");
  });
});
