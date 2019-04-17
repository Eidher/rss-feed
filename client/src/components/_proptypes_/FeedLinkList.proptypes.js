import PropTypes from "prop-types";
import FeedLinkPropType from "./FeedLink.proptype";

export default {
  items: PropTypes.arrayOf(PropTypes.exact(FeedLinkPropType))
};
