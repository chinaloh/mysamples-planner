import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Optional global styles — create frontend/src/index.css if you want app-level styles
import "./styles.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error('Root container not found. Ensure there is an element with id "root" in your HTML.');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
