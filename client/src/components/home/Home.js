import React, { Component } from "react";
import image from "../../assets/images/home1.jpg";
import HomeText from "./HomeText";
import HomeImage from "./HomeImage";

class Home extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const mainText =
      "Hello! My name is Eidher Escalona and this is my proposal for the " +
      "Web Assessment. Thank you!";
    const buttonText = "Go to RSS Feed!";

    return (
      <section id="home">
        <div className="row h-100">
          <HomeText mainText={mainText} buttonText={buttonText} />
          <HomeImage image={image} />
        </div>
      </section>
    );
  }
}

export default Home;
