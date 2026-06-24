import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";

import SubMenu from "../SubMenu/DesktopSubMenu";

const DesktopMenuItem = ({ menuItem }) => (
  <li className="group/menu relative flex-center h-6 text-white transition-colors hover:text-secondary">
    <Link to="#" className="flex-center gap-1">
      <Icon id={menuItem.iconSrc} className="size-6 text-white" />
      <span>{menuItem.title}</span>

      {menuItem.subMenu.length > 0 && (
        <Icon
          id="dropdown-arrow"
          className="size-4 transition-transform group-hover/menu:rotate-180"
        />
      )}
    </Link>

    {menuItem.subMenu.length > 0 && (
      <div className="absolute top-full -right-43 pt-3 xl:-right-15 2xl:-right-4">
        <SubMenu subMenuItems={menuItem.subMenu} />
      </div>
    )}
  </li>
);

export default DesktopMenuItem;
