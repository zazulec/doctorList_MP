import mainReducer from "./mainReducer";

import { combineReducers } from "redux";

const appReducer = combineReducers({
  main: mainReducer,
});

export default appReducer;
