import todayChairProducts from "@public/data/products/today-chair-products";

import Slider from "../../components/Slider/Slider";

const TodayDiscountSection = () => {
  return (
    <section className="flex-center flex-col gap-4 sm:flex-row">
      <img
        src="/images/shapes/pages/home/today-discount-section/discount.webp"
        alt="discount-section"
      />

      <div className="w-full rounded-4xl bg-cream p-6 sm:p-10 lg:p-6 2xl:p-10">
        <Slider
          products={todayChairProducts}
          sliderLabel="محبوب"
          isShowDiscount
        />
      </div>
    </section>
  );
};

export default TodayDiscountSection;
