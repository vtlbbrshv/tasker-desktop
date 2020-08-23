import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./store";
import MainPage from "./UI/mainPage/MainPage";
import "./styles.scss";

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
