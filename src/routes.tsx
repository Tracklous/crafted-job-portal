import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { JobListPage } from "./pages/JobListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JobListPage />,
    errorElement: <ErrorPage />,
  },
]);
