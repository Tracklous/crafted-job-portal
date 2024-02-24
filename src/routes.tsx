import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { JobListPage } from "./pages/JobListPage";
import { UserProfile } from "./pages/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JobListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <UserProfile />
  },
]);
