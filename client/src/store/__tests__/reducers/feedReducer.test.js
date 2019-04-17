import feedReducer from "../../reducers/feedReducer";
import types from "../../actions/types";

describe("Feed Reducer", () => {
  const initialState = {
    feeds: [],
    isLoading: false,
    hasMore: true,
    isAddingFeed: false
  };

  const state = { ...initialState, feeds: [{ test: 1 }] };

  it("should load the initial state", () => {
    expect(feedReducer(undefined, {})).toEqual(initialState);
  });

  it("should set an array of feeds", () => {
    const expected = {
      feeds: [{ test: 1 }, { test: 2 }, { test: 3 }],
      isLoading: false,
      hasMore: false,
      isAddingFeed: false
    };
    expect(
      feedReducer(state, {
        type: types.SET_FEEDS,
        payload: { feeds: [{ test: 2 }, { test: 3 }], hasMore: false }
      })
    ).toEqual(expected);
  });

  it("should add a new feed to the beginning of the feed array", () => {
    const expected = {
      feeds: [{ test: 2 }, { test: 1 }],
      isLoading: false,
      hasMore: true,
      isAddingFeed: false
    };
    expect(
      feedReducer(state, {
        type: types.ADD_FEED,
        payload: { test: 2 }
      })
    ).toEqual(expected);
  });

  it("should update a feed with the feed links", () => {
    const state = {
      ...initialState,
      feeds: [{ id: 1, isError: false }, { id: 2, isError: true }]
    };
    const expected = {
      ...initialState,
      feeds: [
        { id: 1, items: [1, 2, 3], isError: false },
        { id: 2, isError: true }
      ]
    };
    expect(
      feedReducer(state, {
        type: types.UPDATE_FEED_LINKS,
        payload: { feedId: 1, items: [1, 2, 3], isError: false }
      })
    ).toEqual(expected);
  });

  it("should set the loading flag to true", () => {
    const expected = { ...initialState, isLoading: true };
    expect(
      feedReducer(initialState, {
        type: types.IS_LOADING,
        payload: true
      })
    ).toEqual(expected);
  });

  it("should set the isAddingFeed flag to true", () => {
    const expected = { ...initialState, isAddingFeed: true };
    expect(
      feedReducer(initialState, {
        type: types.IS_ADDING_FEED,
        payload: true
      })
    ).toEqual(expected);
  });
});
