import { Outlet } from "react-router";

const Main = () => {
  return (
    <main id="main-root" className="mb-40 overflow-hidden">
      <div
        id="main-root__container"
        className="container *:not-first:mt-20 *:not-first:pt-6"
      >
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
