import Btn from "@/components/Btn/Btn";
import Divider from "@/components/Divider/Divider";

const AvanInfo = () => {
  return (
    <div className="mx-auto mt-70 max-w-100 min-[420px]:mt-80 min-[510px]:mt-90 min-[560px]:mt-110 sm:mt-120 md:mx-0 md:mt-4">
      <p className="text-lg text-primary/50">
        کافه آوان جایی است که عطر قهوه تازه‌دم با آرامش یک فضای صمیمی در هم
        می‌آمیزد. ما تلاش کرده‌ایم محیطی بسازیم که هم برای لحظات تنهایی با یک
        فنجان اسپرسو مناسب باشد و هم برای جمع‌های دوستانه و گفتگوهای طولانی.
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
        <Btn svgSrc="/images/icons/icons.svg#arrow-medium" isBtnActive>
          اطلاعات بیشتر
        </Btn>
      </div>
    </div>
  );
};

export default AvanInfo;
