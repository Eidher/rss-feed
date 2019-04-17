import { connect } from "react-redux";
import { updateLinkList } from "../../../store/actions/feedActions";
import FeedStoryLinkList from "../FeedStoryLinkList";

const mapStateToProps = state => ({
  feeds: state.feed
});

export default connect(
  mapStateToProps,
  { updateLinkList }
)(FeedStoryLinkList);
