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

        handle: {
          pageMeta: {
            title: "کافه آوان",
            desc: "آوان به زبان ایتالیایی یعنی سبز؛ یعنی جایی که قهوه با آرامش طبیعت گره میخورد، چون باور داریم یه کافه خوب باید ریشه در آرامش داشته باشد.",
          },
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
      pageMeta: {
        title: "صفحه پیدا نشد",
        desc: "صفحه ای که به دنبال آن هستید وجود ندارد یا منتقل شده است. لطفا آدرس را بررسی کنید یا به صفحه خانه بروید.",
      },
    },
  },
]);

export default router;
