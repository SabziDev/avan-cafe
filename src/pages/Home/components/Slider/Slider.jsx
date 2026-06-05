import "swiper/css";
import { useId } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/components/Icon/Icon";

import SliderItem from "./SliderItem";

const Slider = ({
  isLoopSlider = false,
  isAutoPlay = false,
  isShowSliderNavigationBtns = false,
  isShowOnlyBasket = false,
  products,
  sliderTitle = "",
  sliderLabel = "",
  isShowDiscount = false,
}) => {
  const id = useId();

  return (
    <>
      <div className="mt-10 flex-items-center justify-between">
        <h3 className="text-[22px] font-bold">{sliderTitle}</h3>

        {isShowSliderNavigationBtns && (
          <div className="flex gap-2">
            <button
              id={`${id}-prev`}
              type="button"
              className="cursor-pointer rounded-full bg-[#d7ccc8] p-1 text-[#A2928B] transition-colors hover:bg-caramel hover:text-white"
            >
              <Icon
                src="images/icons/icons.svg#arrow-right"
                className="size-4"
              />
            </button>
            <button
              id={`${id}-next`}
              type="button"
              className="cursor-pointer rounded-full bg-[#d7ccc8] p-1 text-[#A2928B] transition-colors hover:bg-caramel hover:text-white"
            >
              <Icon
                src="images/icons/icons.svg#arrow-right"
                className="size-4 rotate-180"
              />
            </button>
          </div>
        )}
      </div>

      <Swiper
        slidesPerView="auto"
        loop={isLoopSlider}
        autoplay={
          isAutoPlay
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: `#${id}-prev`,
          nextEl: `#${id}-next`,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="w-64.5! p-2 pb-6 sm:w-64.5!">
            <SliderItem
              product={product}
              sliderLabel={sliderLabel}
              isShowDiscount={isShowDiscount}
              isShowOnlyBasket={isShowOnlyBasket}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
