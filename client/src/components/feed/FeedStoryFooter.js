import React, { Component } from "react";
import PropTypes from "prop-types";

export class FeedStoryFooter extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  render() {
    return (
      <a
        href={this.props.url}
        className="feed-story-footer"
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.props.url}
      </a>
    );
  }
}

export default FeedStoryFooter;
