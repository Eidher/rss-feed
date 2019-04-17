import React, { Component } from "react";
import image from "../../assets/images/demo-screen-1.jpg";
import HomeText from "./HomeText";
import HomeImage from "./HomeImage";

class Home extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const mainText =
      "New Age is an app landing page that will help you beautifull " +
      "showcase your new mobile app, or anything else!";
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
