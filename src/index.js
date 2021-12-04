import React from "react";
import { render } from "react-dom";

import GlobalState from "./context/GlobalState";
import App from "./containers/App";

render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById("root")
);
