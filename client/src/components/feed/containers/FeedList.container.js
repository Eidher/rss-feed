import { connect } from "react-redux";
import { getFeeds } from "../../../store/actions/feedActions";
import FeedList from "../FeedList";

const mapStateToProps = state => ({
  feed: state.feed,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getFeeds }
)(FeedList);
