import products from "@public/data/products/products";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Slider from "../../components/Slider/Slider";

const DessertSection = () => {
  return (
    <section>
      <SectionTitle>دسر ها</SectionTitle>

      <Slider
        products={[...products.cake, ...products.drinks]}
        sliderLabel="آبمیوه"
      />
    </section>
  );
};

export default DessertSection;
