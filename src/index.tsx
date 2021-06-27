import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "./assets/style/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
