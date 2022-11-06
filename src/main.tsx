import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

(async () => {
  const { worker } = await import("./mocks/browser" as any);
  worker.start();
})();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
