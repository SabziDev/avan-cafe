import clsx from "clsx";

import Icon from "@/components/Icon/Icon";

import MobileSubCategoryItem from "../SubCategory/MobileSubCategoryItem";

const MobileSubMenuItem = ({ subMenuItem, isOpen, onToggle }) => {
  return (
    <>
      <li
        onClick={onToggle}
        className={clsx([
          "flex-items-center w-full cursor-pointer justify-between transition-colors hover:text-secondary",
          isOpen ? "text-secondary" : "text-primary",
        ])}
      >
        <span className="text-sm">{subMenuItem.title}</span>
        <Icon
          src="/images/icons/icons.svg#dropdown-arrow"
          className={clsx([
            "size-3 rounded-full text-white transition-transform",
            isOpen ? "rotate-0 bg-secondary" : "rotate-90 bg-primary",
          ])}
        />
      </li>

      <ul
        className={clsx([
          "w-full px-3",
          isOpen ? "flex-justify-center flex-col items-start gap-2" : "hidden",
        ])}
      >
        {subMenuItem.subCategory.map((subCategoryItem) => (
          <MobileSubCategoryItem
            key={subCategoryItem.id}
            subCategoryItem={subCategoryItem}
          />
        ))}
      </ul>
    </>
  );
};

export default MobileSubMenuItem;
