import products from "@/data/products/products";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Slider from "../../components/Slider/Slider";

const DessertsSection = () => {
  return (
    <section id="desserts-section">
      <SectionTitle>دسر ها</SectionTitle>

      <Slider
        products={[...products.cake, ...products.drinks]}
        sliderLabel="آبمیوه"
      />
    </section>
  );
};

export default DessertsSection;
