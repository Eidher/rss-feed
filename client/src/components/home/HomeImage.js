import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class HomeImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="col-lg-5 my-auto">
        <div className="device-container">
          <div className="device-mockup iphone6_plus portrait white">
            <div className="device">
              <div className="screen">
                <img
                  src={this.props.image}
                  className="img-fluid"
                  alt="Principal"
                />
              </div>
              <div className="button" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeImage;
