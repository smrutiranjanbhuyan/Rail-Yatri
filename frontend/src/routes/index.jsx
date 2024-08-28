import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  LandingPage,
  SignupPage,
  LoginPage,
  DashBoard,
  NotFoundPage,
  RoutesPage,
  SearchTrain,
} from "../pages";
import { ErrorBoundary, MapComponent, ThreeDview } from "../components";

const routes = [
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "",
        element: (
          <ErrorBoundary>
            <LandingPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "signup",
        element: (
          <ErrorBoundary>
            <SignupPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "login",
        element: (
          <ErrorBoundary>
            <LoginPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ErrorBoundary>
            <DashBoard />
          </ErrorBoundary>
        ),
        children: [
          {
            path: "",
            element: (
              <ErrorBoundary>
                <DashBoard />
              </ErrorBoundary>
            ),
          },
          {
            path: "search-train",
            element: (
              <ErrorBoundary>
                <SearchTrain />
              </ErrorBoundary>
            ),
          }
        ],
      },
      {
        path: "routes",
        element: (
          <ErrorBoundary>
            <RoutesPage />
          </ErrorBoundary>
        ),
        children: [
          {
            path: "",
            element: (
              <ErrorBoundary>
                <MapComponent />
              </ErrorBoundary>
            ),
          },

          {
            path: "3d",
            element: (
              <ErrorBoundary>
                <ThreeDview />
              </ErrorBoundary>
            ),
          },
        ],
      },

      {
        path: "test",
        element: (
          <ErrorBoundary>
            <ThreeDview />
          </ErrorBoundary>
        ),
      },

      {
        path: "*",
        element: (
          <ErrorBoundary>
            <NotFoundPage />
          </ErrorBoundary>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
