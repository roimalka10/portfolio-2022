import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MouseContextProvider from "./context/MouseContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
