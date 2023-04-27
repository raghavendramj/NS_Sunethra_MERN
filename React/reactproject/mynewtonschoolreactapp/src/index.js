import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Begin from "./Begin";
import Car from "./Car";
import Bus from "./Bus";
import Product from "./Product";
import MountingPhaseDemo from "./LifecycleMounting";
import LifecycleUpdatePhaseDemo from "./LifecycleUpdating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Begin /> */}
    {/* <Car /> */}
    {/* <Bus /> */}
    {/* <Product /> */}
    {/* <MountingPhaseDemo color="maroon" /> */}
    <LifecycleUpdatePhaseDemo player="Virat" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
