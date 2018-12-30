import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

// render(<p>Heeeey</p>, document.querySelector('StorePicker'));
render(<Router />, document.querySelector("#main"));
