import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "hellow world");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am h2 tag")
    ]
  )
);
console.log("parent", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
