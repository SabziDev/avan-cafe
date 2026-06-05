import menuItems from "@public/data/menu/menu.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductsTypesSliderItem from "./ProductsTypesSliderItem";

const ProductsTypesSlider = () => {
  return (
    <Swiper
      slidesPerView={2}
      breakpoints={{
        500: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
        1536: {
          slidesPerView: 9,
        },
      }}
    >
      {menuItems[0].subMenu.map((sliderItem) => (
        <SwiperSlide key={sliderItem.id} className="mx-auto! flex-center!">
          <ProductsTypesSliderItem
            sliderItemTitle={sliderItem.title}
            sliderItemIconSrc={sliderItem.iconSrc}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsTypesSlider;
