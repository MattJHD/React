/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import PageRouter from './components/page-router.jsx';


import "./styles/base.scss";
import "./js/ui.js";

ReactDOM.render(
  <PageRouter/>,
  document.getElementById("grid_app")
);

console.log("index.js says hello !");
