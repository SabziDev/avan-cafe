import clsx from "clsx";

import Img from "@/components/Img/Img";

const DesktopSubMenuItem = ({
  onClickSubMenu,
  subMenuSelectedId,
  subMenuItem,
}) => (
  <li
    onClick={() => onClickSubMenu(subMenuItem.id)}
    className={clsx([
      "flex-center cursor-pointer gap-1 pl-12 text-primary opacity-50 transition-opacity hover:opacity-100",
      subMenuSelectedId === subMenuItem.id && "opacity-100",
    ])}
  >
    <Img
      src={subMenuItem.iconSrc}
      alt="submenu"
      className="size-6 rounded-sm"
    />
    <span>{subMenuItem.title}</span>
  </li>
);

export default DesktopSubMenuItem;
