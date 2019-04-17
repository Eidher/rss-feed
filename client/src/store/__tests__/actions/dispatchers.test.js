import dispatchersWrapper from "../../actions/dispatchers";
import types from "../../actions/types";

describe("Dispatchers", () => {
  const dispatchMock = jest.fn(x => x);
  const {
    setLoading,
    setAddingFeed,
    setListError,
    setFormError,
    updateLinks,
    addFeeds,
    addFeed
  } = dispatchersWrapper(dispatchMock);

  it("should return IS_LOADING action", () => {
    setLoading(true);
    expect(dispatchMock.mock.results[0].value).toEqual({
      type: types.IS_LOADING,
      payload: true
    });
  });

  it("should return IS_ADDING_FEED action", () => {
    setAddingFeed(true);
    expect(dispatchMock.mock.results[1].value).toEqual({
      type: types.IS_ADDING_FEED,
      payload: true
    });
  });

  it("should return SET_ERRORS action of type LIST", () => {
    setListError("list error");
    expect(dispatchMock.mock.results[2].value).toEqual({
      type: types.SET_ERRORS,
      payload: { list: "list error" }
    });
  });

  it("should return SET_ERRORS action of type FORM", () => {
    setFormError("form error");
    expect(dispatchMock.mock.results[3].value).toEqual({
      type: types.SET_ERRORS,
      payload: { form: "form error" }
    });
  });

  it("should return SET_FEEDS action", () => {
    addFeeds([1, 2], true);
    expect(dispatchMock.mock.results[4].value).toEqual({
      type: types.SET_FEEDS,
      payload: { feeds: [1, 2], hasMore: true }
    });
  });

  it("should return ADD_FEED action", () => {
    addFeed({ test: 1 });
    expect(dispatchMock.mock.results[5].value).toEqual({
      type: types.ADD_FEED,
      payload: { test: 1 }
    });
  });

  it("should return UPDATE_FEED_LINKS action", () => {
    updateLinks([1, 2, 3]);
    expect(dispatchMock.mock.results[6].value).toEqual({
      type: types.UPDATE_FEED_LINKS,
      payload: [1, 2, 3]
    });
  });
});
