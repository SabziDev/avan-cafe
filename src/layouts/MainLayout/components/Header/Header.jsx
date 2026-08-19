import { Link } from "react-router";

import Divider from "@/components/Divider/Divider";
import Icon from "@/components/Icon/Icon";
import useToggle from "@/hooks/useToggle";

import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";

const Header = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);

  return (
    <header className="mt-4">
      <div className="container">
        <nav className="relative z-100 flex-items-center justify-between rounded-t-2xl bg-primary px-6 py-3">
          <div className="flex-center gap-5 xl:gap-10">
            <Link to="/">
              <div className="h-10 w-32.5">
                <img
                  src="/images/app-logo.webp"
                  alt="avan-coffee"
                  className="size-full"
                />
              </div>
            </Link>
            <Menu
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
          <div className="flex-center gap-2.5">
            <Basket />
            <span className="hidden lg:block">
              <Divider />
            </span>
            <Login />
            <div
              onClick={toggleMobileMenu}
              className="cursor-pointer rounded-full bg-secondary p-2 lg:hidden"
            >
              <Icon id="four-squares-icon" className="size-6" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
