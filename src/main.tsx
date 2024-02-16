import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { TopNavBar } from "./components/TopNavBar";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  // Todo create custom hook to provide theme details.
  const [currentTheme, _] = useState<"dark" | "light">("light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <React.StrictMode>
        <TopNavBar />
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
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
