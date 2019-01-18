// import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import allReducers from "./reducers/AllReducers";
import { initialState } from "./store/initialState";
import "./index.css";
import App from "./containers/App";
const logger = createLogger();

const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(thunk, logger)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
