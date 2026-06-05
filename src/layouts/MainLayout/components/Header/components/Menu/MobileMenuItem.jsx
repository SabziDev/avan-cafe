import clsx from "clsx";
import { useState } from "react";

import Icon from "@/components/Icon/Icon";
import useToggle from "@/hooks/useToggle";

import MobileSubMenuItem from "../SubMenu/MobileSubMenuItem";

const MobileMenuItem = ({ menuItem }) => {
  const [isOpenMenu, toggleisOpenMenu] = useToggle(false);
  const [mobileOpenSubMenuId, setMobileOpenSubMenuId] = useState(null);

  const toggleOpenSubMenu = (subMenuItem) =>
    setMobileOpenSubMenuId((prev) =>
      prev === subMenuItem.id ? null : subMenuItem.id,
    );

  return (
    <>
      <li
        onClick={menuItem.subMenu.length > 0 ? toggleisOpenMenu : null}
        className={clsx([
          "flex-items-center w-full cursor-pointer justify-between transition-colors hover:text-secoundary",
          isOpenMenu ? "text-secoundary" : "text-primary",
        ])}
      >
        <div className="flex-items-center w-full justify-between gap-1">
          <div className="flex-center gap-2">
            <Icon src={menuItem.iconSrc} className="size-6 text-primary/80" />
            <span>{menuItem.title}</span>
          </div>

          {menuItem.subMenu.length > 0 && (
            <Icon
              src="/images/icons/icons.svg#dropdown-arrow"
              className={clsx([
                "size-4 rounded-full text-white transition-transform",
                isOpenMenu ? "rotate-0 bg-secoundary" : "rotate-90 bg-primary",
              ])}
            />
          )}
        </div>
      </li>
      {menuItem.subMenu.length > 0 && (
        <ul
          className={clsx([
            "w-full px-3",
            isOpenMenu
              ? "flex-justify-center flex-col items-start gap-2"
              : "hidden",
          ])}
        >
          {menuItem.subMenu.map((subMenuItem) => (
            <MobileSubMenuItem
              key={subMenuItem.id}
              subMenuItem={subMenuItem}
              isOpen={mobileOpenSubMenuId === subMenuItem.id}
              onToggle={() => toggleOpenSubMenu(subMenuItem)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileMenuItem;
