/* eslint-disable custom/sort-object-props */

import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/page";
import NotFound from "./pages/NotFound/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
    ],
  },

  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
