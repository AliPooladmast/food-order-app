import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import {
  cartDisplay,
  cartItemChange,
  buttonHighlight,
} from "./Containers/reducers";
import "./Styles/index.css";
import App from "./Containers/App";
import reportWebVitals from "./reportWebVitals";

const logger = createLogger();
const reducer = combineReducers({
  cartDisplay,
  cartItemChange,
  buttonHighlight,
});
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
