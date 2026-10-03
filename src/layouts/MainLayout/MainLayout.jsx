import LayoutBase from "../components/LayoutBase";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const MainLayout = () => {
  return (
    <>
      <LayoutBase />

      <div className="mt-4">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
