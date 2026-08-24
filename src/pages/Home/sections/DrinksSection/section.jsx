import products from "@/data/features/products/products";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Slider from "../../components/Slider/Slider";

const DrinksSection = () => (
  <section id="drinks-section">
    <SectionTitle isShowLink>نوشیدنی ها</SectionTitle>
    <Slider products={products.drinks} sliderLabel="محبوب" isShowDiscount />
  </section>
);

export default DrinksSection;
