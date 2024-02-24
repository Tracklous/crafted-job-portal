import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { JobListPage } from "./pages/JobListPage";
import { UserProfile } from "./pages/UserProfile";
import { PostJob } from "./pages/PostJob";
import { SignIn } from "./pages/SignIn";

export const router = createBrowserRouter([
  // Auth Pages
  {
    path: "sign-in",
    id: "sign-in",
    element: <SignIn />,
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
  },
  {
    path: "post-job",
    id: "postJob",
    element: <PostJob />,
    errorElement: <ErrorPage />,
  },
]);
