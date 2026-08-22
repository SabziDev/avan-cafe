import { createBrowserRouter, Navigate } from "react-router";

import pagesSeo from "./data/pagesSeo/pagesSeo";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/page";
import NotFound from "./pages/NotFound/page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        Component: Home,
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
    Component: NotFound,
    handle: {
      seo: pagesSeo.notFound,
    },
  },
]);

export default router;
