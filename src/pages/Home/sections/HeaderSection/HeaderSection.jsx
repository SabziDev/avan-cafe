import todayChairProducts from "@public/data/products/today-chair-products";

import Slider from "../../components/Slider/Slider";
import HeaderInput from "./components/HeaderInput";
import HeaderParallax from "./components/HeaderParallax";

const HeaderSection = () => (
  <section
    className="relative -mt-0.5 flex overflow-hidden rounded-b-4xl bg-secondary px-4 pb-10 sm:px-0 sm:pb-14 xl:overflow-visible"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, #02314b80 1px, transparent 2px)",
      backgroundSize: "20px 20px",
    }}
  >
    <div className="absolute inset-x-0 mx-auto max-h-132.5 max-w-157.5 overflow-hidden bg-secondary/50 px-4 select-none 2xl:-left-160">
      <img
        src="/images/shapes/pages/home/header-section/hero.webp"
        alt="shape"
        className="size-full object-fill"
      />
    </div>

    <HeaderParallax />

    <div className="mx-auto mt-80 flex-center w-60 flex-col text-center min-[340px]:w-65 min-[365px]:w-70 min-[380px]:w-74 min-[400px]:w-80 min-[420px]:w-84 min-[440px]:w-88 min-[450px]:mt-90 min-[470px]:w-96 min-[500px]:mt-110 min-[500px]:w-100 min-[580px]:mt-130 sm:w-135 md:mt-145 xl:mt-140 2xl:mt-8 2xl:mr-10">
      <span className="rounded-full bg-secondary/50 py-4 text-xl font-bold text-white sm:text-4xl">
        لحظـــه های خــــــــــــوش همینجاست
      </span>
      <div className="w-full overflow-hidden rounded-4xl bg-white px-4 py-10 sm:mt-2">
        <HeaderInput />
        <Slider
          isShowSliderNavigationBtns
          isLoopSlider
          isAutoPlay
          products={todayChairProducts}
          sliderTitle="میز امروز"
          sliderLabel="ویژه امروز"
          isShowOnlyBasket
        />
      </div>
    </div>
    <div />
  </section>
);

export default HeaderSection;
