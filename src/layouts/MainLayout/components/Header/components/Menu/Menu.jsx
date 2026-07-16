import menuItems from "@public/data/menu/menu.js";
import clsx from "clsx";
import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";

import DesktopMenuItem from "./DesktopMenuItem";
import MobileMenuItem from "./MobileMenuItem";

const Menu = ({ isOpenMobileMenu, toggleOpenMobileMenu }) => {
  return (
    <>
      <ul className="hidden w-full gap-5 lg:flex-center xl:gap-10">
        {menuItems.map((menuItem) => (
          <DesktopMenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>

      <div
        onClick={toggleOpenMobileMenu}
        className={clsx([
          "fixed inset-0 z-199 h-screen bg-black/50 transition-opacity duration-300 lg:hidden",
          isOpenMobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ])}
      />
      <div
        className={clsx([
          "fixed inset-y-0 right-0 z-200 flex h-screen w-[80%] flex-col justify-between overflow-y-auto bg-white px-6 pt-4 pb-30 transition-opacity duration-300 lg:hidden",
          isOpenMobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ])}
      >
        <div className="flex-center flex-col gap-10">
          <Link to="/" className="w-full rounded-xl bg-primary px-6 py-3">
            <div className="h-10 w-32.5">
              <img
                src="/images/app-logo.webp"
                alt="avan-coffee"
                className="size-full"
              />
            </div>
          </Link>
          <ul className="flex-justify-center w-full flex-col items-start gap-6">
            {menuItems.map((menuItem) => (
              <MobileMenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-6 flex-center gap-4">
            <button
              type="button"
              className="flex-center w-28 gap-1 rounded-full bg-cream px-1.5 py-1 pl-2 transition-colors hover:bg-caramel"
            >
              <span className="w-[80%] rounded-full bg-white text-caramel">
                ورود
              </span>
              <Icon id="arrow-long" className="size-4.5 text-primary/60" />
            </button>
            <button
              type="button"
              className="flex-center w-28 gap-1 rounded-full bg-secondary px-1.5 py-1 pl-2"
            >
              <span className="w-[80%] rounded-full bg-white text-secondary">
                ثبت‌نام
              </span>
              <Icon id="login" className="size-4.5 text-primary/60" />
            </button>
          </div>
          <a href="tel:09911943412" className="flex-center gap-1">
            <div className="flex-center flex-col">
              <div className="ltr">
                <span className="text-secondary">+98</span>
                <span> 991 194 3412</span>
              </div>
              <span className="text-xs">
                همین حالا با پشتیبانی ما تماس بگیر
              </span>
            </div>
            <Icon id="phone" className="size-10 text-secondary" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
