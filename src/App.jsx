import { useEffect } from "react";
import { RouterProvider } from "react-router";

import logDeveloperSignature from "./components/DeveloperSignature/logDeveloperSignature";
import router from "./routes";

const App = () => {
  useEffect(() => {
    const setTimeoutId = setTimeout(
      () => document.querySelector("#app-preloader")?.remove(),
      300,
    );

    logDeveloperSignature();

    return () => clearTimeout(setTimeoutId);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
