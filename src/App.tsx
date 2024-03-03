import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PrivateRoute } from "./components/AuthGuard";
import { TopNavBar } from "./components/TopNavBar";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import { MainPage } from "./pages/HomePage";
import { JobListPage } from "./pages/JobListPage";
import { LoginPage } from "./pages/LoginPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import theme from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import { ErrorPage } from "./pages/ErrorPage";
import { JobsAppliedPage } from "./pages/JobsAppliedPage";

export const App = () => {
  // TODO: create custom hook to provide theme details.
  const [currentTheme, _] = useState<"dark" | "light">("light");
  // const routes = useRoutes(router);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AuthProvider>
        <GlobalStyle />
        <TopNavBar />
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<MainPage />}>
            {/* public routes */}
            <Route path="login" element={<LoginPage />} />
            {/* we want to protect these routes */}
            <Route element={<PrivateRoute />} errorElement={<ErrorPage />}>
              <Route
                path="/"
                element={<JobListPage />}
                errorElement={<ErrorPage />}
              />
              <Route path="/applied-jobs" element={<JobsAppliedPage />} />
              <Route path="profile" element={<UserProfilePage />} />
            </Route>
            {/* catch all */}
            {/* <Route path="*" element={<Missing />} /> */}
          </Route>
        </Routes>
        {/* {routes} */}
      </AuthProvider>
    </ThemeProvider>
  );
};
