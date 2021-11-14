import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
