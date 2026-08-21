import { createBrowserRouter, Navigate } from "react-router";

import pagesMeta from "./data/pages-meta/pages-meta";
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
          pageMeta: { ...pagesMeta.home },
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
      pageMeta: { ...pagesMeta.notFound },
    },
  },
]);

export default router;
