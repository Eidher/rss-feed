import actionTypes from "../actions/types";

const initialState = {
  list: "",
  form: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;
