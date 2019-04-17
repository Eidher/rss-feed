import PropTypes from "prop-types";
import FeedListPropType from "./FeedList.proptypes";

export default {
  feed: PropTypes.exact({
    feeds: FeedListPropType.feeds,
    isLoading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isAddingFeed: PropTypes.bool.isRequired
  }).isRequired
};
