import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Content from "../layout/Content";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
