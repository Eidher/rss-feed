import React, { Component } from "react";
import FeedStory from "./FeedStory";
import FeedError from "./FeedError";

import PropTypes from "prop-types";
import FeedStatePropType from "../_proptypes_/FeedState.proptypes";
import ErrorStatePropType from "../_proptypes_/ErrorState.proptypes";

class FeedList extends Component {
  static propTypes = {
    ...FeedStatePropType,
    ...ErrorStatePropType,
    getFeeds: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    // Lazy load manager
    window.onscroll = () => {
      const {
        feed: { isLoading, hasMore },
        error
      } = this.props;

      // If there's an error, is loading or has no more feeds, we stop
      if (error.list || isLoading || !hasMore) {
        return;
      }

      // Checks that the page has scrolled to the bottom - 200 px
      // If so, fetch more feeds, the amount of feeds fetched is in feedAction.js
      const d = document.documentElement;
      if (d.offsetHeight + d.scrollTop > d.scrollHeight - 200) {
        this.props.getFeeds();
      }
    };
  }

  componentDidMount() {
    // If the component is mounted and has no feeds we fetch them
    if (!this.props.feed.feeds.length) {
      this.props.getFeeds();
    }
  }

  render() {
    const {
      feed: { feeds, isLoading },
      error
    } = this.props;

    return (
      <div className="feed-list">
        {error.list && <FeedError message={error.list} />}
        <div className="d-flex flex-wrap justify-content-center">
          {feeds.map(feedItem => (
            <FeedStory feed={feedItem} key={feedItem.id} />
          ))}
        </div>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <img alt="Loading" className="loading" />
          </div>
        )}
      </div>
    );
  }
}

export default FeedList;
