import BottomFooter from "./components/BottomFooter/BottomFooter";
import MainFooter from "./components/MainFooter/MainFooter";
import TopFooter from "./components/TopFooter/TopFooter";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="flex-justify-center w-full flex-col gap-10 rounded-t-4xl bg-secondary/90 px-6 pt-8">
        <TopFooter />

        <MainFooter />

        <BottomFooter />
      </div>
    </div>
  </footer>
);

export default Footer;
