import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <footer className="w-100">
        <div className="container">
          <p>
            &copy; RSS Feed - Eidher Escalona - {new Date().getFullYear()}. All
            Rights Reserved.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/feed">RSS Feed</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
