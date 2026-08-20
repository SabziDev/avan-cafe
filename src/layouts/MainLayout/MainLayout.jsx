import LayoutBase from "../components/LayoutBase";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const MainLayout = () => {
  return (
    <>
      <LayoutBase />

      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default MainLayout;
