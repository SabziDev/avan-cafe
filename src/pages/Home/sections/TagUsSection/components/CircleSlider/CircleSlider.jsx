import "swiper/css";
import { useId } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/components/Icon/Icon";

import UserStory from "../UserStory";

const CircleSlider = ({ users }) => {
  const id = useId();

  return (
    <div className="relative flex-center w-full gap-2">
      <button
        id={`${id}-prev`}
        type="button"
        className="absolute -right-4 z-20 rounded-full bg-[#d7ccc8] p-1 text-[#A2928B] transition-colors hover:bg-caramel hover:text-white"
      >
        <Icon src="/images/icons/icons.svg#arrow-short" className="size-4" />
      </button>

      <Swiper
        slidesPerView={3}
        spaceBetween={-70}
        breakpoints={{
          500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 7,
          },
          1536: {
            slidesPerView: 9,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: `#${id}-prev`,
          nextEl: `#${id}-next`,
        }}
        modules={[Pagination, Navigation]}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <UserStory user={user} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        id={`${id}-next`}
        type="button"
        className="absolute -left-1 z-20 rounded-full bg-[#d7ccc8] p-1 text-[#A2928B] transition-colors hover:bg-caramel hover:text-white"
      >
        <Icon
          src="/images/icons/icons.svg#arrow-short"
          className="size-4 rotate-180"
        />
      </button>
    </div>
  );
};

export default CircleSlider;
