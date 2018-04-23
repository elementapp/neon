import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

const root = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(root);

ReactDOM.render(
  <App/>,
  root,
);

