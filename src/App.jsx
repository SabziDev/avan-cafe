import { useEffect } from "react";
import { RouterProvider } from "react-router";

import "./layouts/components/DeveloperSignature/logDeveloperSignature";
import router from "./routes";

const removeAppPreloader = () => {
  document.querySelector("#app-preloader")?.remove();
  document.body.classList.remove("overflow-hidden");
};

const App = () => {
  useEffect(() => removeAppPreloader(), []);

  return <RouterProvider router={router} />;
};

export default App;
