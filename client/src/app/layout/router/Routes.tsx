import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import HomePage from "../../../features/activities/home/HomePage";
import ActivityDashboard from "../../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../../features/activities/details/ActivityDetailPage";
import Counter from "../../../features/counter/Counter";
import TestErrors from "../../../features/errors/TestErrors";
import NotFound from "../../../features/errors/NotFound";
import ServerError from "../../../features/errors/ServerError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetailPage /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm key="update" /> },
      { path: "counter", element: <Counter key="update" /> },
      { path: "errors", element: <TestErrors key="TestErrors" /> },
      { path: "not-found", element: <NotFound key="TestErrors" /> },
      { path: "server-error", element: <ServerError key="TestErrors" /> },
      { path: "*", element: <Navigate replace to="/not-found" key="TestErrors" /> },
    ],
  },
]);
