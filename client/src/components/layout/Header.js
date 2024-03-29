import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo img-fluid" alt="Univision Logo" /> / RSS Feed
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-navbar-trigger" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-navbar-trigger" to="/feed">
                  RSS Feed
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-navbar-trigger" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
