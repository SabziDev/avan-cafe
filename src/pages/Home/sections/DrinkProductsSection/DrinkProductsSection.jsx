import products from "@public/data/products/products";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Slider from "../../components/Slider/Slider";

const PopularProductsSection = () => (
  <section>
    <SectionTitle isShowLink>نوشیدنی ها</SectionTitle>
    <Slider products={products.drinks} sliderLabel="محبوب" isShowDiscount />
  </section>
);

export default PopularProductsSection;
