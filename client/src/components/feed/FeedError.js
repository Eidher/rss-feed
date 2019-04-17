import React, { Component } from "react";
import PropTypes from "prop-types";
import image from "../../assets/images/oops.png";

class FeedError extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="feed-error">
        <div className="header">
          <img className="logo img-fluid" alt="Error Logo" src={image} /> Oops
          Something Went Wrong!
        </div>
        <div className="main">
          But don't panic! It mus be something simple...
        </div>
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}

export default FeedError;
