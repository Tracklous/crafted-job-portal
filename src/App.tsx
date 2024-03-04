import { useState } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TopNavBar } from "./components/TopNavBar";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import { router } from "./routes";
import theme from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";

export const App = () => {
  // TODO: create custom hook to provide theme details.
  const [currentTheme, _] = useState<"dark" | "light">("light");
  const routes = useRoutes(router);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AuthProvider>
        <GlobalStyle />
        <TopNavBar />
        {/* This main router outlet */}
        <Outlet />
        {routes}
      </AuthProvider>
    </ThemeProvider>
  );
};
