import { createBrowserRouter, Navigate } from "react-router";

import pagesSeo from "./data/pagesSeo/pagesSeo";
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
    element: <NotFound />,
    handle: {
      seo: pagesSeo.notFound,
    },
  },
]);

export default router;
