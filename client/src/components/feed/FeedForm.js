import React, { Component } from "react";
import classnames from "classnames";
import ErrorStatePropType from "../_proptypes_/ErrorState.proptypes";
import PropTypes from "prop-types";

class FeedForm extends Component {
  static propTypes = {
    ...ErrorStatePropType,
    addFeed: PropTypes.func.isRequired,
    cleanFormError: PropTypes.func.isRequired,
    isAddingFeed: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      url: ""
    };
  }

  onInputChange = e => {
    this.setState({ url: this.inputUrl.value });
    this.props.cleanFormError();
  };

  onButtonClick = e => {
    e.preventDefault();
    e.target.blur();
    this.props.addFeed(this.state.url);
    this.inputUrl.value = "";
  };

  render() {
    // const error = this.props.error.form;
    const {
      isAddingFeed,
      error: { form: error }
    } = this.props;

    return (
      <div className="row feed-form">
        <div className="col-lg-3 col-xs-12 my-auto title">Add your feed!</div>
        <div className="col-lg-7 col-xs-12 my-auto input">
          <input
            className={classnames("form-control", {
              "is-invalid": error && !isAddingFeed
            })}
            type="text"
            name="url"
            placeholder="Enter the rss feed url here..."
            onChange={this.onInputChange}
            ref={el => (this.inputUrl = el)}
          />
          {error && !isAddingFeed && (
            <div className="invalid-feedbac">{error}</div>
          )}
          {isAddingFeed && (
            <div className="invalid-feedbac">Adding feed, please wait...</div>
          )}
        </div>
        <div className="col-lg-2  col-xs-12 my-auto button">
          <button
            className="btn btn-outline btn-xl btn-block"
            onClick={this.onButtonClick}
            disabled={isAddingFeed}
          >
            Add Feed
          </button>
        </div>
      </div>
    );
  }
}

export default FeedForm;
