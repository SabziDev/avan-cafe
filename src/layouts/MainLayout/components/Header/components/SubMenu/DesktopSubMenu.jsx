import { useState } from "react";

import DesktopSubCategory from "../SubCategory/DesktopSubCategory";
import DesktopSubMenuItem from "./DesktopSubMenuItem";

const DesktopSubMenu = ({ subMenuItems }) => {
  const [subMenuSelectedId, setSubMenuSelectedId] = useState(
    subMenuItems[0].id,
  );

  return (
    <div className="hidden w-max overflow-hidden rounded-xl shadow-xl group-hover/menu:flex-center">
      <ul className="flex-justify-center h-80 w-50 flex-col items-start gap-6 bg-cream px-4 py-8">
        {subMenuItems.map((subMenuItem) => (
          <DesktopSubMenuItem
            key={subMenuItem.id}
            subMenuSelectedId={subMenuSelectedId}
            subMenuItem={subMenuItem}
            onClickSubMenu={setSubMenuSelectedId}
          />
        ))}
      </ul>

      <DesktopSubCategory
        subCategoryItems={
          subMenuItems.find(
            (subMenuItem) => subMenuItem.id === subMenuSelectedId,
          ).subCategory
        }
      />
    </div>
  );
};

export default DesktopSubMenu;
