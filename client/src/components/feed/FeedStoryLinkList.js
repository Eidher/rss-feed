import React, { Component } from "react";
import FeedStoryLink from "./FeedStoryLink";
import FeedPropType from "../_proptypes_/Feed.proptypes";
import FeedStatePropType from "../_proptypes_/FeedState.proptypes";
import PropTypes from "prop-types";
import image from "../../assets/images/warning.png";

export class FeedStoryLinkList extends Component {
  static propTypes = {
    ...FeedPropType,
    feeds: FeedStatePropType.feed,
    updateLinkList: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      isLoading: false
    };
  }

  shouldComponentUpdate() {
    // If we already have items, it's not necessary to update the component
    if (this.props.feed.items && this.props.feed.items.length) {
      return false;
    }
    return true;
  }

  // Updating the component state based on props received
  static getDerivedStateFromProps(props) {
    let isLoading = props.isLoading;
    if (!props.feed.items || !props.feed.items.length) {
      isLoading = true;
    }

    return {
      isLoading,
      isError: props.feed.isError
    };
  }

  componentDidMount() {
    // If there's no links, we'll fetch them
    const feed = this.props.feed;
    if (!feed.items || !feed.items.length) {
      this.props.updateLinkList(feed);
    }
  }

  render() {
    // Initializing items as an empty array
    const {
      feed: { items = [] }
    } = this.props;

    return (
      <ul className="list-group list-group-flush">
        {this.state.isLoading && !this.state.isError && (
          <div className="list-group-item list-group-item-action feed-story-item loader">
            <img alt="Loading" />
            <div className="text">
              <div>Loading, please wait...</div>
            </div>
          </div>
        )}
        {this.state.isError && (
          <div className="list-group-item list-group-item-action feed-story-item error">
            <div className="text">
              <img src={image} alt="error" />
              <div>Oops something went wrong...</div>
            </div>
          </div>
        )}
        {items.map((item, i) => (
          <FeedStoryLink title={item.title} key={`item-${i}`} url={item.url} />
        ))}
      </ul>
    );
  }
}

export default FeedStoryLinkList;
