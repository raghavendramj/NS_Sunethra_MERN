import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import UnMountingDemo from "./components/LifecycleUnmounting";
import ProductPropsDemo from "./components/PropsExample";
import PropsExampleClassComponent from "./components/ProductPropsCCDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Begin /> */}
    {/* <Car /> */}
    {/* <Bus /> */}
    {/* <Product /> */}
    {/* <MountingPhaseDemo color="maroon" /> */}
    {/* <LifecycleUpdatePhaseDemo player="Virat" /> */}
    {/* <UnMountingDemo /> */}
    <ProductPropsDemo model="iphone 14" />
    <PropsExampleClassComponent model="Samsung S22 Ultra" />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
