import users from "@public/data/users/users";

import Btn from "@/components/Btn/Btn";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CircleSlider from "./components/CircleSlider/CircleSlider";

const TagUsSection = () => {
  return (
    <section className="md:flsex-items-center md:jsustify-between mb-90">
      <div className="mb-8">
        <div className="max-w-120">
          <SectionTitle>
            ما رو تــگ کــــن تا تو هم اینجــــا باشــــی!
          </SectionTitle>
        </div>
        <div className="hidden lg:block">
          <Btn svgSrc="/images/icons/icons.svg#insta" className="mt-2 mr-10">
            صفحه اینستاگرام
          </Btn>
        </div>
      </div>

      <div
        className="relative flex-items-center h-100 flex-col justify-start gap-4 rounded-4xl bg-caramel p-2 pr-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #02314b80 1px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      >
        <CircleSlider users={users} />
        <div className="flex-center flex-wrap gap-1 *:rounded-md *:bg-cream *:px-3 *:py-1.5 *:text-sm *:text-[#A2928B]">
          <span>#کافه_آوان</span>
          <span>#حال_خوبه</span>
          <span>#تابستون</span>
          <span>#همه_با_هم</span>
          <span>#cafe_avan</span>
          <span>#coffee-time</span>
          <span>#شکلاتی</span>
          <span>#شکلاتی</span>
        </div>

        <img
          src="/images/pictures/pages/home/tag-us/insta-mobile.png"
          alt="insta-mobile"
          className="absolute -bottom-80 h-130 w-80"
        />
      </div>
    </section>
  );
};

export default TagUsSection;
