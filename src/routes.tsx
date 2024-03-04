import { PrivateRoute, PublicRoute } from "./components/AuthGuard";
import { ErrorPage } from "./pages/ErrorPage";
import { MainPage } from "./pages/HomePage";
import { JobListPage } from "./pages/JobListPage";
import { JobsAppliedPage } from "./pages/JobsAppliedPage";
import { LoginPage } from "./pages/LoginPage";
import { PostJobPage } from "./pages/PostJobPage";
import { PostedJobsPage } from "./pages/PostedJobsPage";
import { UserProfilePage } from "./pages/UserProfilePage";

export const router = [
  {
    path: "/login",
    id: "login",
    element: (
      <PublicRoute>
        <LoginPage />,
      </PublicRoute>
    ),
  },
  {
    path: "jobs",
    id: "jobs-root",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        id: "JobListPage",
        element: <JobListPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "applied-jobs",
        id: "postedJob",
        element: <JobsAppliedPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "hire",
    id: "hire-root",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        id: "postJob",
        element: <PostJobPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "posted-jobs",
        id: "postedJob",
        element: <PostedJobsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "profile",
    id: "userProfile",
    element: <UserProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    id: "fallback",
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
  },
];
