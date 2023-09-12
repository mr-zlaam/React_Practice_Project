import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
import RadialGradient from './Components/Background Animated/bgAnimated'
// import './Global.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RadialGradient />
    </BrowserRouter>
  </React.StrictMode>
);
