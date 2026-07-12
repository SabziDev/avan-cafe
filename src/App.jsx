import { useEffect } from "react";
import { RouterProvider } from "react-router";

import logDeveloperSignature from "./components/DeveloperSignature/logDeveloperSignature";
import router from "./routes";

const removeAppPreloader = () => {
  document.querySelector("#app-preloader")?.remove();
  document.body.classList.remove("overflow-hidden");
};

const App = () => {
  useEffect(() => {
    logDeveloperSignature();
    removeAppPreloader();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
