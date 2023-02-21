// 1 import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2 get reference of root id
const el = document.getElementById("root");
// 3 tell react to take control over the elements
const root = ReactDOM.createRoot(el);
// 4 create new component

// 5 display component on the screen
root.render(<App />);
