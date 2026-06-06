import Btn from "@/components/Btn/Btn";
import Divider from "@/components/Divider/Divider";
import Icon from "@/components/Icon/Icon";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

const WhyAvanSectiom = () => {
  return (
    <section className="relative mb-100">
      <SectionTitle>چرا کافه آوان؟</SectionTitle>
      <div className="flex-items-center flex-col justify-between xl:flex-justify-center xl:items-start">
        <div className="flex-justify-center max-w-250 flex-col items-start gap-4 xl:flex-row">
          <div className="mx-auto mt-70 max-w-100 min-[420px]:mt-80 min-[510px]:mt-90 min-[560px]:mt-110 sm:mt-120 md:mx-0 md:mt-4">
            <p className="text-lg text-primary/50">
              کافه آوان جایی است که عطر قهوه تازه‌دم با آرامش یک فضای صمیمی در
              هم می‌آمیزد. ما تلاش کرده‌ایم محیطی بسازیم که هم برای لحظات تنهایی
              با یک فنجان اسپرسو مناسب باشد و هم برای جمع‌های دوستانه و گفتگوهای
              طولانی.
            </p>
            <div className="my-12 flex-center gap-3 text-center">
              <div className="flex-center flex-col">
                <span className="ltr">+120 نفر</span>
                <b>مشتری روزانه</b>
              </div>
              <Divider />
              <div className="flex-center flex-col">
                <span>97 درصد</span>
                <b>رضایت مشتری</b>
              </div>
              <Divider />
              <div className="flex-center flex-col">
                <span className="ltr">+5 سال</span>
                <b>سابقه کاری</b>
              </div>
            </div>
            <div className="flex-center gap-6">
              <Btn svgSrc="/images/icons/icons.svg#map">گوگل مپ</Btn>
              <Btn svgSrc="/images/icons/icons.svg#arrow-left" isBtnActive>
                اطلاعات بیشتر
              </Btn>
            </div>
          </div>
          <div className="mt-8 flex-center flex-col">
            <video
              src="/videos/pages/home/why-avan-section/sample-video.mp4"
              controls
              className="w-200 rounded-4xl border border-primary/20 xl:w-120"
            >
              <track kind="captions" label="زیرنویس در دسترس نیست" default />
            </video>
            <div className="mt-6 flex-items-center h-15 w-80 justify-between gap-2 rounded-full bg-[#D7CCC8] px-6 min-[502px]:h-20 min-[502px]:w-full">
              <img
                src="/images/pictures/pages/home/why-avan-section/insta.png"
                alt="insta"
                className="scale-80 pb-7"
              />
              <div className="flex-center gap-4">
                <img
                  src="/images/pictures/pages/home/why-avan-section/telegram.png"
                  alt="insta"
                  className="cursor-pointer"
                />
                <img
                  src="/images/pictures/pages/home/why-avan-section/youtube.png"
                  alt="insta"
                  className="cursor-pointer"
                />
              </div>
              <div className="hidden cursor-pointer rounded-full bg-white px-4 py-2 text-caramel min-[502px]:flex-center min-[502px]:gap-2">
                <span>صفحه اینستاگرام</span>
                <Icon
                  src="/images/icons/icons.svg#insta"
                  className="size-6.5"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shapes/home/why-avan-section/humberger.png"
          alt="humberger-section"
          className="absolute -left-15 mt-2 sm:-left-20 md:-left-60 md:-mt-12 md:scale-70 lg:-left-42 lg:scale-90 xl:-left-110 xl:scale-90 2xl:-left-55 2xl:scale-100"
        />
      </div>
    </section>
  );
};

export default WhyAvanSectiom;
