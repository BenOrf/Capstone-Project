import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/css/index.css";
import "./assets/css/tailwind.css";

ReactDOM.render(
  <React.StrictMode>
    <App articles={JSON.parse(localStorage.getItem("prevArticles"))} />
  </React.StrictMode>,
  document.getElementById("root")
);
