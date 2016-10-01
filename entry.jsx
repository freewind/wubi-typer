"use strict";
import Container from "./container.jsx";
import React from "react";
import ReactDOM from "react-dom";
import generateWords from "./word-generator";

ReactDOM.render(
  <Container columns={25} words={generateWords(25 * 25)}/>,
  document.getElementById("content")
);

