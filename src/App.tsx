import { useEffect } from "react";
import { GlobalStyle } from "./Styles/Global.styled";
import { AppRoutes } from "./routes";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  });

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
