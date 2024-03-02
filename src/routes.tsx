import { PrivateRoute } from "./components/AuthGuard";
import { ErrorPage } from "./pages/ErrorPage";
import { MainPage } from "./pages/HomePage";
import { JobListPage } from "./pages/JobListPage";
import { LoginPage } from "./pages/LoginPage";
import { PostJob } from "./pages/PostJob";
import { PostedJobs } from "./pages/PostedJobs";
import { UserProfile } from "./pages/UserProfile";

export const router = [
  // Auth Pages
  {
    path: "/login",
    id: "login",
    element: <LoginPage />,
  },
  // Main Pages
  {
    path: "/",
    id: "root",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
    ],
  },
];
