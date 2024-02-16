import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TopNavBar } from "./components/TopNavBar";
import "./index.css";
import { router } from "./routes";
import theme from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";

const App = () => {
  // Todo create custom hook to provide theme details.
  const [currentTheme, _] = useState<"dark" | "light">("light");

  return (
    <React.StrictMode>
      <GlobalStyle/>
      <ThemeProvider theme={theme[currentTheme]}>
        <TopNavBar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
});
