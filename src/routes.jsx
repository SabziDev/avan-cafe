/* eslint-disable @sabzidev/sort-props */

import { createBrowserRouter, Navigate } from "react-router";

import metadata from "./data/metadata/metadata";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/Home/page";
import NotFoundPage from "./pages/NotFound/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
        handle: {
          seo: metadata.home,
        },
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
    handle: {
      seo: metadata.notFound,
    },
  },
]);

export default router;
