import Icon from "@/components/Icon/Icon";

const HomeHeaderInput = () => {
  return (
    <div className="mx-auto flex-center h-12 w-[90%] rounded-full bg-cream px-6">
      <input
        type="search"
        name="search"
        placeholder="دنبال چی می‌گردی؟"
        className="size-full text-xl ring-0 placeholder:text-base"
      />
      <Icon
        src="/images/icons/icons.svg#search"
        className="size-6 cursor-pointer"
      />
    </div>
  );
};

export default HomeHeaderInput;
