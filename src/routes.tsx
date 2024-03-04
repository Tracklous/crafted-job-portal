import { Outlet } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/AuthGuard";
import { ErrorPage } from "./pages/ErrorPage";
import { JobListPage } from "./pages/jobs/JobListPage";
import { JobsAppliedPage } from "./pages/jobs/JobsAppliedPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { PostJobPage } from "./pages/hire/PostJobPage";
import { PostedJobsPage } from "./pages/hire/PostedJobsPage";
import { UserProfilePage } from "./pages/profile/UserProfilePage";

export const router = [
  {
    path: "login",
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
        <Outlet />
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
        <Outlet />
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
    element: (
      <PrivateRoute>
        <UserProfilePage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    id: "fallback",
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
  },
];
