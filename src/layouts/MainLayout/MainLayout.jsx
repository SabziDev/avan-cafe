import { useOutlet } from "react-router";

import LayoutBase from "../components/LayoutBase";
import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const MainLayout = () => {
  const outlet = useOutlet();

  const { isHideLayout } = useCurrentPageStatus();

  return (
    <>
      <LayoutBase />

      {!isHideLayout && <Header />}

      <main id="main-root" className="mb-40 overflow-hidden">
        <div
          id="main-root__container"
          className="container *:not-first:mt-20 *:not-first:pt-6"
        >
          {outlet}
        </div>
      </main>

      {!isHideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
