import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";
import useToggle from "@/hooks/useToggle";

import Divider from "../../../../components/Divider/Divider";
import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";

const Header = () => {
  const [isOpenMobileMenu, toggleOpenMobileMenu] = useToggle(false);

  return (
    <header className="mt-4">
      <div className="container">
        <nav className="relative z-100 flex-items-center justify-between rounded-xl bg-primary px-6 py-3">
          <div className="flex-center gap-5 xl:gap-10">
            <Link to="/">
              <div className="h-10 w-32.5">
                <img
                  src="/images/app-logo.png"
                  alt="avan-coffee"
                  className="size-full"
                />
              </div>
            </Link>
            <Menu
              isOpenMobileMenu={isOpenMobileMenu}
              toggleOpenMobileMenu={toggleOpenMobileMenu}
            />
          </div>
          <div className="flex-center gap-2.5">
            <Basket />
            <span className="hidden lg:block">
              <Divider />
            </span>
            <Login />
            <div
              onClick={toggleOpenMobileMenu}
              className="cursor-pointer rounded-full bg-secondary p-2 lg:hidden"
            >
              <Icon
                src="/images/icons/icons.svg#four-squares-icon"
                className="size-6"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
