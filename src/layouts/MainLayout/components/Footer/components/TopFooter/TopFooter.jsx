import Icon from "@/components/Icon/Icon";

const TopFooter = () => {
  return (
    <div className="flex-items-center flex-col justify-between divide-y divide-white/20 *:w-full *:py-6 *:first:pt-0 lg:flex-row lg:divide-y-0 lg:*:w-auto">
      <div className="flex-center">
        <img
          src="/images/app-logo--light.png"
          alt="avan-coffee"
          className="h-15 w-45"
        />
      </div>

      <div className="flex-center flex-col gap-6 lg:flex-row">
        <h3 className="text-xl font-bold text-white">پیگیری سفارشات</h3>
        <div className="flex-center h-12 w-80 rounded-full bg-cimarron px-0 transition-all focus-within:ring-1 focus-within:ring-cream/50">
          <input
            type="search"
            name="search"
            placeholder="کد پیگیری"
            className="text-xl ring-0 placeholder:text-base placeholder:text-white/50"
          />
          <Icon
            src="/images/icons/icons.svg#search-minus"
            className="size-6 cursor-pointer"
          />
        </div>
      </div>

      <a href="tel:09911943412" className="flex-center gap-6">
        <div className="flex-end flex-col">
          <span className="text-xl font-bold">09911943412</span>
          <span className="text-lg text-white/80">پشتیبانی مجموعه</span>
        </div>
        <div className="flex-center rounded-full bg-white p-2">
          <Icon
            src="/images/icons/icons.svg#phone"
            className="size-7 stroke-primary"
          />
        </div>
      </a>
    </div>
  );
};

export default TopFooter;
