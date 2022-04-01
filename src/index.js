import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import "./index.css";
import { MenuProvider } from "hooks";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <Router>
        <App />
      </Router>
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
