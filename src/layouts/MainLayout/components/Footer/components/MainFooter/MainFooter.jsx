import Btn from "@/components/Btn/Btn";

const MainFooter = () => {
  return (
    <div className="-mx-6 flex-items-center flex-col justify-between divide-y divide-white/20 bg-[#679cbc] p-6 *:w-full *:py-6 *:first:pt-0 2xl:flex-row 2xl:divide-y-0">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">کافه آوان</h3>
        <p className="mt-2 text-justify text-[18px] text-white/80 2xl:max-w-100">
          ما اینجا جمع شدیم تا لحظه‌هاتو گرم‌تر، گفتگو‌هاتو عمیق‌تر و طعم
          نوشیدنی‌هات رو به‌یادماندنی‌تر کنیم. از قهوه‌های دستی تا دمنوش‌های
          خاص، از صبحانه تا عصرونه—کافه آوان یعنی مکانی برای مکث، مزه، و معاشرت.
        </p>
      </div>

      <div className="flex-items-center justify-between lg:justify-center lg:gap-40 2xl:gap-8">
        <div className="flex-center flex-col gap-4">
          <h3 className="mb-4 text-lg font-bold text-white">دسترسی سریع</h3>
          <div className="flex-center flex-col gap-2 transition-colors *:flex-center *:h-9 *:w-30 *:cursor-pointer *:rounded-full *:bg-cimarron *:text-[18px] *:text-white *:hover:bg-cimarron/80">
            <span>دسته‌بندی</span>
            <span>تخفیف‌ها</span>
            <span>وبلاگ</span>
          </div>
        </div>
        <div className="flex-center flex-col gap-4">
          <h3 className="mb-4 text-lg font-bold text-white">ارتباط با ما</h3>
          <div className="flex-center flex-col gap-2 transition-colors *:flex-center *:h-9 *:w-30 *:cursor-pointer *:rounded-full *:bg-cimarron *:text-[18px] *:text-white *:hover:bg-cimarron/80">
            <span>صفحه اصلی</span>
            <span>درباره ما</span>
            <span>تماس با ما</span>
          </div>
        </div>
      </div>

      <div className="flex-center flex-col gap-4">
        <div className="flex-center flex-col 2xl:items-start">
          <h3 className="mb-2 text-xl font-bold text-white">مجوز ها</h3>
          <div className="flex-center gap-2 transition-colors *:flex-center *:h-14 *:w-35 *:cursor-pointer *:rounded-full *:bg-cimarron *:text-[18px] *:text-white *:hover:bg-cimarron/80 2xl:*:w-50">
            <div>
              <img
                src="/images/pictures/layouts/footer/enamad.png"
                alt="enmad"
              />
            </div>
            <div>
              <img
                src="/images/pictures/layouts/footer/samandehi.png"
                alt="samandehi"
              />
            </div>
          </div>
        </div>

        <div className="flex-center flex-col 2xl:items-start">
          <h3 className="mb-2 text-xl font-bold text-white">خبرنامه</h3>
          <div className="flex-items-center h-12 justify-between rounded-full bg-cimarron pr-6 pl-2 transition-all focus-within:ring-1 focus-within:ring-cream/50">
            <input
              type="search"
              name="search"
              placeholder="ایمیل خود را وارد کنید"
              className="w-35 text-xl ring-0 placeholder:text-sm placeholder:text-white/50 sm:w-auto"
            />
            <Btn
              isBtnActive
              svgSrc="/images/icons/icons.svg#arrow-medium"
              className="max-w40"
            >
              ثبت
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
