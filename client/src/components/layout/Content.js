import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../home/Home";
import Feed from "../feed/Feed";
import Contact from "../contact/Contact";

class Content extends Component {
  scrollToTop() {
    window.scrollTo(0, 0);
    return null;
  }

  render() {
    return (
      <main>
        <div className="container h-100">
          <Route component={this.scrollToTop} />
          <Route path="/" exact component={Home} />
          <Route path="/feed" component={Feed} />
          <Route path="/contact" component={Contact} />
        </div>
      </main>
    );
  }
}

export default Content;
