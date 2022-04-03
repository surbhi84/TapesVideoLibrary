import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import App from "./App";
import "./index.css";
import { MenuProvider, VideoProvider, UserProvider } from "hooks";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <VideoProvider>
        <MenuProvider>
          <Router>
            <App />
          </Router>
        </MenuProvider>
      </VideoProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
