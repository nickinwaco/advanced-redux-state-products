import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";



import "whatwg-fetch";

fetch("http://localhost:5100/products")
  .then((response) => {
    console.log("execute this when data is retrieved.", response);
  })
  .catch((err) => {
    console.log("oops, error!");
  });

console.log("when is this executed, first or second?")


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
