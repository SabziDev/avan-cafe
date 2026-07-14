import "swiper/css";
import { useId } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/components/Icon/Icon";

import ProductCardRectangle from "../ProductCardRectangle/ProductCardRectangle";
import ProductCardSquare from "../ProductCardSquare/ProductCardSquare";

const Slider = ({
  products,
  sliderTitle = "",
  sliderLabel = "",
  cardShape = "square",
  isLoopSlider = false,
  isAutoPlay = false,
  isShowSliderNavigationBtns = false,
  isShowOnlyBasket = false,
  isShowDiscount = false,
}) => {
  const id = useId();

  return (
    <>
      <div className="mt-6 flex-items-center justify-between">
        <h3 className="text-[22px] font-bold">{sliderTitle}</h3>

        {isShowSliderNavigationBtns && (
          <div className="flex gap-2">
            <button
              id={`${id}-prev`}
              type="button"
              className="rounded-full bg-[#d7ccc8] p-1 text-[#A2928B] transition-colors hover:bg-caramel hover:text-white"
            >
              <Icon id="arrow-short" className="size-4" />
            </button>
            <button
              id={`${id}-next`}
              type="button"
              className="rounded-full bg-[#d7ccc8] p-1 text-[#A2928B] transition-colors hover:bg-caramel hover:text-white"
            >
              <Icon id="arrow-short" className="size-4 rotate-180" />
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
        {cardShape === "square"
          ? products.map((product) => (
              <SwiperSlide key={product.id} className="w-60! p-2 sm:w-64!">
                <ProductCardSquare
                  product={product}
                  sliderLabel={sliderLabel}
                  isShowDiscount={isShowDiscount}
                  isShowOnlyBasket={isShowOnlyBasket}
                />
              </SwiperSlide>
            ))
          : products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="w-86! p-2 sm:ml-4 sm:w-100!"
              >
                <ProductCardRectangle
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
