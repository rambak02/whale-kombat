import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext.tsx";
import { BoostsProvider } from "./context/BoostsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PopupProvider>
        <BoostsProvider>
        <App />
        </BoostsProvider>
      </PopupProvider>
    </BrowserRouter>
  </React.StrictMode>
);
