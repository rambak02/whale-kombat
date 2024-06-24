import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext.tsx";
import { BoostsProvider } from "./context/BoostsContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <PopupProvider>
        <BoostsProvider>
        <App />
        </BoostsProvider>
      </PopupProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
