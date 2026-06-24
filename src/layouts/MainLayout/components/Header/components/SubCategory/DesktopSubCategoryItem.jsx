import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";

const DesktopSubCategoryItem = ({ subCategoryItem }) => (
  <li className="relative flex-center h-6 rounded-xl px-6 py-2 text-sm text-primary/60 transition-all hover:-translate-x-2 hover:bg-cream">
    <Link to="#" className="flex-center gap-1">
      <Icon id="circle" className="size-3" />
      <span>{subCategoryItem.title}</span>
    </Link>
  </li>
);

export default DesktopSubCategoryItem;
