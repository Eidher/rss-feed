import React, { Component } from "react";
import FeedStoryHeader from "./FeedStoryHeader";
import FeedStoryLinkList from "./containers/FeedStoryLinkList.container";
import FeedStoryFooter from "./FeedStoryFooter";

import FeedPropType from "../_proptypes_/Feed.proptypes";

class FeedStory extends Component {
  static propTypes = { ...FeedPropType };

  render() {
    const { feed } = this.props;

    return (
      <div className="card feed-story">
        <FeedStoryHeader name={feed.name} description={feed.description} />
        <FeedStoryLinkList feed={feed} />
        <FeedStoryFooter url={feed.baseUrl} />
      </div>
    );
  }
}

export default FeedStory;
