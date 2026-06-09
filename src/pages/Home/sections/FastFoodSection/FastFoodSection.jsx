import products from "@public/data/products/products";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Slider from "../../components/Slider/Slider";

const FastFood = () => {
  return (
    <section>
      <SectionTitle isShowLink>فست فود</SectionTitle>

      <Slider
        products={products.fastFood}
        sliderLabel="خوش قیمت"
        cardShape="rectangle"
        isShowSliderNavigationBtns
      />
    </section>
  );
};

export default FastFood;
