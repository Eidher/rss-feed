import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HomeText extends PureComponent {
  static propTypes = {
    mainText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="col-lg-7 my-auto">
        <div className="content mx-auto">
          <h1 className="mb-5">{this.props.mainText}</h1>
          <Link to="/feed" className="btn btn-outline btn-xl">
            {this.props.buttonText}
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeText;
