import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TopNavBar } from "./components/TopNavBar";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import { router } from "./routes";
import theme from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";

export const App = () => {
  const routes = useRoutes(router);
  // TODO: create custom hook to provide theme details.
  // const [currentTheme, _] = useState<"dark" | "light">("light");
  // const selectedTheme = theme[currentTheme]}

  return (
    <ThemeProvider theme={theme.light}>
      <AuthProvider>
        <GlobalStyle />
        <TopNavBar />
        {routes}
      </AuthProvider>
    </ThemeProvider>
  );
};
