import DesktopSubCategoryItem from "./DesktopSubCategoryItem";

const DesktopSubCategory = ({ subCategoryItems }) => (
  <ul className="flex-start h-80 min-w-50 flex-col flex-wrap gap-x-2 gap-y-6 bg-white px-4 pt-7 text-sm">
    {subCategoryItems.map((subCategoryItem) => (
      <DesktopSubCategoryItem
        key={subCategoryItem.id}
        subCategoryItem={subCategoryItem}
      />
    ))}
  </ul>
);

export default DesktopSubCategory;
