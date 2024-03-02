import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { JobListPage } from "./pages/JobListPage";
import { UserProfile } from "./pages/UserProfile";
import { PostJob } from "./pages/PostJob";
import { LoginPage } from "./pages/LoginPage";
import { PostedJobs } from "./pages/PostedJobs";

export const router = createBrowserRouter([
  // Auth Pages
  {
    path: "login",
    id: "login",
    element: <LoginPage />,
  },
  // Main Pages
  {
    path: "/",
    id: "home",
    element: null,
    errorElement: <ErrorPage />,
  },
  {
    path: "job-list",
    id: "JobListPage",
    element: <JobListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    id: "userProfile",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "post-job",
    id: "postJob",
    element: <PostJob />,
    errorElement: <ErrorPage />,
  },
  {
    path: "posted-jobs",
    id: "postedJob",
    element: <PostedJobs />,
    errorElement: <ErrorPage />,
  },
]);
