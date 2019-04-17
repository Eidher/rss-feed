import { connect } from "react-redux";
import { addFeed, cleanFormError } from "../../../store/actions/feedActions";
import FeedForm from "../FeedForm";

const mapStateToProps = state => ({
  error: state.error,
  isAddingFeed: state.feed.isAddingFeed
});

export default connect(
  mapStateToProps,
  { addFeed, cleanFormError }
)(FeedForm);
