const SelectItem = ({
  value,
  setIsOpenSelectbox,
  selectboxValue,
  onClickSelectboxItem,
}) => {
  return (
    <div
      onClick={() => {
        onClickSelectboxItem(value);
        setIsOpenSelectbox(false);
      }}
      className="z-20 flex-items-center w-full justify-between px-2 hover:bg-cream/50"
    >
      <span>{value}</span>
      {selectboxValue === value ? (
        <span className="relative size-5 rounded-full border border-caramel before:absolute before:inset-0.5 before:rounded-full before:bg-caramel" />
      ) : (
        <span className="size-5 rounded-full bg-cream" />
      )}
    </div>
  );
};

export default SelectItem;
