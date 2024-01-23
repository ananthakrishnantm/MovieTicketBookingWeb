import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/HomeComponents/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navigation />
    <App />
  </BrowserRouter>
);
