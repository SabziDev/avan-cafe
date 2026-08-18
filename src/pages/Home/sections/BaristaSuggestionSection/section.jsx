import Btn from "@/components/Btn/Btn";

import ProductCardRectangle from "../../components/ProductCardRectangle/ProductCardRectangle";

const BaristaSuggestionSection = () => {
  return (
    <section className="flex-center flex-col gap-4 lg:flex-row">
      <img
        src="/images/pictures/pages/home/barista-suggestion-section/barista.webp"
        alt="barista"
        className="mb-8"
      />
      <div className="rounded-4xl bg-cream p-6 sm:p-10 lg:p-6 2xl:p-10">
        <div className="rounded-4xl bg-white p-6 sm:p-10 lg:p-6 2xl:p-10">
          <div className="flex-center flex-col gap-4 2xl:flex-row">
            <ProductCardRectangle
              product={{
                title: "قهوه ترک - بزرگ",
                price: 190_000,
                imgSrc: "/images/pictures/products/coffee-cup.webp",
              }}
            />
            <ProductCardRectangle
              product={{
                title: "کیک لیمو - بزرگ",
                price: 190_000,
                imgSrc: "/images/pictures/products/cake-red.webp",
              }}
            />
          </div>
          <div className="mt-6 flex-items-center flex-col justify-end gap-4 px-12 2xl:flex-row">
            <Btn svgId="arrow-medium" className="w-full 2xl:w-auto">
              سفارش کامل پیشنهاد باریستا
            </Btn>
            <Btn svgId="arrow-medium" className="w-full 2xl:w-auto">
              سفارش موارد انتخاب شده
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaristaSuggestionSection;
