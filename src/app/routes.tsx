import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../widgets/Layout/layout";
import { ErrorElement } from "../pages/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "videos",
        element: <h1>Dashboard Videos</h1>,
        children: [
          {
            path: "videoone",
            element: <h1>Dashboard Videos One</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "/blog",
    element: <h1>Coming Soon...</h1>,
    errorElement: <ErrorElement />,
  },
]);
