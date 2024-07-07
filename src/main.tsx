import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { OffersProvider } from "./context/OffersContext.tsx";
import { FriendsProvider } from "./context/FriendsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FriendsProvider>
          <PopupProvider>
            <OffersProvider>
              <App />
            </OffersProvider>
          </PopupProvider>
        </FriendsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
