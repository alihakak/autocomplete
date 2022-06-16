import React from "react";
import { render } from "react-dom";
import App from "./App";
import countries from "../api/countries.json";
import { AutoComplete } from "../src/components/AutoComplete";

const rootElement = document.getElementById("root");
render(
  <>
    <h2>Simple Input with State and Data</h2>
    <AutoComplete
      inputStyle={{ backgroundColor: "#0f6fff", color: "#fff" }}
      optionsStyle={{ backgroundColor: "#0f6fff" }}
      data={countries}
      iconColor="Green"
    />
  </>,
  rootElement
);
