import { useOutlet } from "react-router";

import LayoutBase from "../components/LayoutBase";
import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const RootLayout = () => {
  const outlet = useOutlet();

  const { isHideLayout } = useCurrentPageStatus();

  return (
    <>
      <LayoutBase />

      {!isHideLayout && <Header />}

      <main id="main-root" className="mb-40 overflow-hidden">
        <div
          id="main-root__container"
          className="container *:pt-4 *:not-first:mt-20"
        >
          {outlet}
        </div>
      </main>

      {!isHideLayout && <Footer />}
    </>
  );
};

export default RootLayout;
