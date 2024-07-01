import { useEffect } from "react";
import { GlobalStyle } from "./Styles/Global.styled";
import { AppRoutes } from "./routes";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    /** Рекомендованная практика? Обсудим устно */
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
