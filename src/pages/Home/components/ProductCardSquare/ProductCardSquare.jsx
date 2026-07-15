import Icon from "@/components/Icon/Icon";
import Img from "@/components/Img/Img";

const ProductCardSquare = ({
  product,
  sliderLabel,
  isShowDiscount,
  isShowOnlyBasket,
}) => {
  return (
    <article
      className="
        relative cursor-default overflow-hidden rounded-3xl bg-white p-2 pt-0 shadow-md select-none
        before:absolute before:right-0 before:bg-secondary before:px-5 before:py-1 before:text-sm before:text-white before:transition-colors before:duration-300
        before:content-(--label) after:absolute after:inset-x-0 after:top-15 after:z-10 after:mx-auto after:h-8 after:w-[90%] after:rounded-full after:bg-cream after:transition-colors
        after:duration-300 hover:before:bg-[#4a7d9c]
        hover:after:bg-caramel"
      style={{
        "--label": `"${sliderLabel}"`,
      }}
    >
      <Img
        src={product.imgSrc}
        alt="product"
        loading="lazy"
        className="relative z-20 mx-auto mt-6 size-25 rounded-2xl"
      />
      <h3>{product.title}</h3>
      <span className="line-clamp-1 text-sm text-[#7b7b7b]">
        {product.desc}
      </span>

      <div className="mt-4 flex-items-center gap-1.5 justify-between">
        {isShowOnlyBasket ? (
          <button type="button" className="flex-center">
            <Icon
              id="basket"
              className="size-10 cursor-pointer rounded-full bg-cream/80 p-2 text-[#A2928B] transition-colors duration-300 hover:bg-caramel hover:text-white"
            />
          </button>
        ) : (
          <button
            type="button"
            className="group relative flex-center h-9.5 w-32 rounded-full bg-cream/80 text-[#A2928B] transition-colors duration-300 hover:bg-caramel"
          >
            <span className="absolute inset-1 left-10 z-1 flex-center rounded-full bg-white p-0.5 text-sm font-bold text-caramel transition-all duration-300 group-hover:left-1">
              سفارش بده
            </span>
            <Icon id="basket" className="absolute left-2 z-0 size-6" />
          </button>
        )}

        <div className="flex-center flex-col">
          {isShowDiscount && (
            <del className="text-[18px] font-bold text-primary/50">
              {(product.price + 20_000).toLocaleString()}
            </del>
          )}
          <span className="flex-center gap-1 text-[18px] font-bold">
            {product.price.toLocaleString()}
            <Icon id="toman" className="size-5 text-caramel" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCardSquare;
