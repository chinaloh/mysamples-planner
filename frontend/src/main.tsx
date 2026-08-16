import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

/**
 * Vite entry (main.tsx)
 * Ensure frontend/index.html contains: <div id="root"></div>
 */

const container = document.getElementById("root");
if (!container) {
  throw new Error(
    "Root container not found. Ensure your index.html contains <div id=\"root\"></div>."
  );
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
