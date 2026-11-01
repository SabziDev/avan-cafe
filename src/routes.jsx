/* eslint-disable @sabzidev/sort-props */

import { createBrowserRouter, Navigate } from "react-router";

import pagesSeo from "./data/pagesSeo/pagesSeo";
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
          seo: pagesSeo.home,
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
      seo: pagesSeo.notFound,
    },
  },
]);

export default router;
