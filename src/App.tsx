import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { TopNavBar } from "./components/TopNavBar";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import theme from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import { useRoutes } from "react-router-dom";
import { router } from "./routes";

export const App = () => {
  // Todo create custom hook to provide theme details.
  const [currentTheme, _] = useState<"dark" | "light">("light");
  const routes = useRoutes(router);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AuthProvider>
        <GlobalStyle />
        <TopNavBar />
        {/* <RouterProvider router={router} /> */}
        {routes}
      </AuthProvider>
    </ThemeProvider>
  );
};
