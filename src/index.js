import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import "./assets/css/nucleo-icons.css";
import "./assets/demo/demo.css";

import "./assets/scss/blk-design-system-react.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./componen/index";
import InputBattery from "./componen/inputBattery";
import Verifikasi from "./componen/verifikasi";
import Failed from "./componen/failed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/input" element={<InputBattery />} />
      <Route path="/verifikasi" element={<Verifikasi />} />
      <Route path="/failed" element={<Failed />} />
      {/* <Route path="/landing-page" element={<LandingPage />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
