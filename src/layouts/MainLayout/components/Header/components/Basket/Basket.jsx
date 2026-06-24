import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";

import BasketSummary from "./BasketSummary";

const Basket = () => (
  <div className="group relative">
    <Link
      to="#"
      className="flex-center rounded-full bg-secondary p-2 lg:h-11 lg:w-32 lg:justify-between lg:p-1 lg:pl-2.5"
    >
      <div className="hidden w-[70%] justify-between rounded-full bg-white p-1.5 lg:flex-items-center">
        <span>0</span>
        <Icon id="toman" className="size-4" />
      </div>
      <Icon id="basket" className="size-6 text-white" />
    </Link>
    <div className="absolute top-full -right-35 pt-4 lg:-right-15">
      <BasketSummary />
    </div>
  </div>
);

export default Basket;
