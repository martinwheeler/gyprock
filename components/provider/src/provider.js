import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { browserHistory } from "react-router";
import { createStore, combineReducers } from "redux";

export default function Provider({ story, reducers }) {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return <ReduxProvider store={store}>{story}</ReduxProvider>;
}
