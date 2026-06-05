import { Link } from "react-router";

import Img from "@/components/Img/Img";

const ProductsTypesSliderItem = ({ sliderItemTitle, sliderItemIconSrc }) => {
  return (
    <Link
      to="#"
      className="mb-4 flex-center w-30 flex-col gap-1 rounded-2xl bg-white p-4 text-primary/40 drop-shadow-md transition-all duration-250 select-none hover:bg-caramel hover:text-white"
    >
      <Img
        src={sliderItemIconSrc}
        alt="product-type"
        className="size-12.5 rounded-xl"
      />
      <span>{sliderItemTitle}</span>
    </Link>
  );
};

export default ProductsTypesSliderItem;
