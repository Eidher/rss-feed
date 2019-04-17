import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

// Using redux thunk for async actions
const middleWares = [ReduxThunk];

// Creating the redux store
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleWares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
