import React, { Component } from "react";
import FeedLinkPropType from "../_proptypes_/FeedLink.proptype";

export class FeedStoryLink extends Component {
  static propTypes = { ...FeedLinkPropType };

  render() {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={this.props.url}
        title={this.props.title}
        className="list-group-item list-group-item-action feed-story-item"
      >
        <div className="title">- {this.props.title}</div>
      </a>
    );
  }
}

export default FeedStoryLink;
