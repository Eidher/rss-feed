import errorReducer from "../../reducers/errorReducer";
import types from "../../actions/types";

describe("Error Reducer", () => {
  const initialState = {
    list: "",
    form: ""
  };
  it("should return the initial state", () => {
    expect(errorReducer(undefined, {})).toEqual(initialState);
  });

  it('should set a "list" error', () => {
    const expectedResult = {
      list: "list error",
      form: ""
    };
    expect(
      errorReducer(initialState, {
        type: types.SET_ERRORS,
        payload: { list: "list error" }
      })
    ).toEqual(expectedResult);
  });

  it('should set a "from" error', () => {
    const expectedResult = {
      list: "",
      form: "form error"
    };
    expect(
      errorReducer(initialState, {
        type: types.SET_ERRORS,
        payload: { form: "form error" }
      })
    ).toEqual(expectedResult);
  });
});
