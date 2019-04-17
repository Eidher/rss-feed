import actionTypes from "./types";

// Dispatchers wrappers helpers
//This helpers method can be used in any redux store action
export default dispatch => {
  const setLoading = bool => {
    dispatch({
      type: actionTypes.IS_LOADING,
      payload: bool
    });
  };

  const setAddingFeed = bool => {
    dispatch({
      type: actionTypes.IS_ADDING_FEED,
      payload: bool
    });
  };

  const setListError = (err = "") => {
    let error = err;
    if (typeof err === "string") {
      error = { message: err };
    }

    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: { list: error.message || "" }
    });
  };

  const setFormError = (err = "") => {
    let error = err;
    if (typeof err === "string") {
      error = { message: err };
    }

    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: { form: error.message || "" }
    });
  };

  const addFeeds = (feeds, hasMore) => {
    dispatch({
      type: actionTypes.SET_FEEDS,
      payload: {
        feeds,
        hasMore
      }
    });
  };

  const addFeed = feed => {
    dispatch({
      type: actionTypes.ADD_FEED,
      payload: feed
    });
  };

  const updateLinks = payload => {
    dispatch({
      type: actionTypes.UPDATE_FEED_LINKS,
      payload
    });
  };

  return {
    setLoading,
    setAddingFeed,
    setListError,
    setFormError,
    updateLinks,
    addFeeds,
    addFeed
  };
};
