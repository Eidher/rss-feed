import React, { Component } from "react";
import PropTypes from "prop-types";

export class FeedStoryHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <div className="feed-story-header card-header">{this.props.name}</div>
        <div className="feed-story-header card-subtitle">
          {this.props.description}
        </div>
      </React.Fragment>
    );
  }
}

export default FeedStoryHeader;
