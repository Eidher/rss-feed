import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import types from "../../actions/types";
import { http } from "../../../utils";
import { cleanFormError, getFeeds } from "../../actions/feedActions";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const store = mockStore();

jest.mock("../../../utils");
http
  .mockImplementationOnce(() => {
    return {
      get: () => Promise.reject(new Error("error thrown"))
    };
  })
  .mockImplementationOnce(() => {
    return {
      get: () =>
        Promise.resolve({
          data: [
            {
              id: 1,
              name: "test",
              url: "url test",
              basUrl: "base url",
              description: "description test"
            }
          ]
        })
    };
  });

describe("Feed Action", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  it("should set a value for the store form error", () => {
    const expectedActions = [
      {
        type: types.SET_ERRORS,
        payload: { form: "" }
      }
    ];

    store.dispatch(cleanFormError());
    expect(store.getActions()).toEqual(expectedActions);
  });

  describe("getFeeds", () => {
    it("should thrown an error", () => {
      const expectedActions = [
        { type: types.IS_LOADING, payload: true },
        {
          type: types.SET_ERRORS,
          payload: { list: "" }
        },
        {
          type: types.SET_ERRORS,
          payload: { list: "error thrown" }
        },
        {
          type: types.IS_LOADING,
          payload: false
        }
      ];

      return store.dispatch(getFeeds()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should dispatch the right actions", () => {
      const expectedActions = [
        { type: types.IS_LOADING, payload: true },
        {
          type: types.SET_ERRORS,
          payload: { list: "" }
        },
        {
          type: types.SET_FEEDS,
          payload: {
            feeds: [
              {
                id: 1,
                name: "test",
                url: "url test",
                basUrl: "base url",
                description: "description test",
                isError: false
              }
            ],
            hasMore: false
          }
        },
        {
          type: types.IS_LOADING,
          payload: false
        }
      ];

      return store.dispatch(getFeeds()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
