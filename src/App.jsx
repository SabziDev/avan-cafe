import { useEffect } from "react";
import { RouterProvider } from "react-router";

import logDeveloperSignature from "./components/DeveloperSignature/logDeveloperSignature";
import router from "./routes";

const removeAppPreloader = () => {
  setTimeout(() => document.querySelector("#app-preloader")?.remove(), 300);
};

const App = () => {
  useEffect(() => {
    removeAppPreloader();

    logDeveloperSignature();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
