import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App";
import "@fontsource/exo-2";
import "@fontsource/roboto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
