import PropTypes from "prop-types";
import FeedPropType from "./Feed.proptypes";

export default {
  feeds: PropTypes.arrayOf(PropTypes.exact(FeedPropType)).isRequired
};
