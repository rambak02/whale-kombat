import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PopBoostProvider } from "./context/PopBoostContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <PopBoostProvider>
      <App />
      </PopBoostProvider>
    </BrowserRouter>

  </React.StrictMode>
);
