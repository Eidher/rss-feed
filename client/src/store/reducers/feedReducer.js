import actionTypes from "../actions/types";

const initialState = {
  feeds: [],
  isLoading: false,
  hasMore: true,
  isAddingFeed: false
};

const reducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    // Sets the feeds to the store
    case actionTypes.SET_FEEDS:
      return {
        ...state,
        feeds: state.feeds.concat(payload.feeds),
        hasMore: payload.hasMore
      };

    // Adds a feed at the beginning of the feeds list
    case actionTypes.ADD_FEED:
      return {
        ...state,
        feeds: [payload].concat(state.feeds)
      };

    // Updates one feed with the feed links
    case actionTypes.UPDATE_FEED_LINKS:
      const { feedId, items, isError } = payload;
      const feeds = [...state.feeds];

      // Adding the link items to the feed
      const mappedFeeds = feeds.map(feed => {
        if (feed.id === feedId) {
          return { ...feed, items, isError };
        }
        return feed;
      });

      return {
        ...state,
        feeds: mappedFeeds
      };

    // Set flag isLoading at root level
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: payload
      };

    // Set the flag isAddingFeed
    case actionTypes.IS_ADDING_FEED:
      return {
        ...state,
        isAddingFeed: payload
      };

    default:
      return state;
  }
};

export default reducer;
