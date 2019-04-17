import { combineReducers } from "redux";
import feedReducer from "./feedReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  feed: feedReducer,
  error: errorReducer
});
