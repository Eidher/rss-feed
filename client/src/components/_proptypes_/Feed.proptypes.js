import PropTypes from "prop-types";
import FeedLinkListPropType from "./FeedLinkList.proptypes";

export default {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  baseUrl: PropTypes.string,
  description: PropTypes.string,
  items: FeedLinkListPropType.items,
  isError: PropTypes.bool
};
