import { useEffect } from "react";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { AppRoutes } from "./routes";

function App() {
  const webApp = window.Telegram.WebApp;

  useEffect(() => {
    webApp.ready();
    webApp.expand();
  });

  return (
    <>
      <AppRoutes />
      <BottomNav />
    </>
  );
}

export default App;
