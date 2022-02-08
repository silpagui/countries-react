import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { App } from "./components/App/App.component";
import { Provider } from "react-redux";
import { appStore } from "./store/store";

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
