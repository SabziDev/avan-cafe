import Btn from "@/components/Btn/Btn";
import Icon from "@/components/Icon/Icon";
import Img from "@/components/Img/Img";

const ProductCardRectangle = ({ product }) => {
  return (
    <article
      className="
        relative flex-items-center w-82 cursor-default overflow-hidden rounded-3xl p-8 shadow-[0_0_6px_rgba(0,0,0,0.1)] select-none before:content-(--label)
        after:absolute after:inset-0 after:right-11 after:my-auto after:h-[90%] after:w-8 after:rounded-full after:bg-cream after:transition-colors after:duration-300 hover:after:bg-caramel
        sm:w-100
        sm:after:right-12"
    >
      <Img
        src={product.imgSrc}
        alt={product.title}
        loading="lazy"
        className="z-2 h-20 w-30"
      />
      <div className="flex-justify-center w-full flex-col items-start gap-6">
        <div className="flex-items-center w-full justify-between">
          <h3 className="mr-6">{product.title}</h3>
          <Img
            src="/images/icons/tik.png"
            className="size-4.5 cursor-pointer rounded-full"
          />
        </div>

        <div className="mr-20 flex-center flex-col-reverse gap-2 sm:flex-row">
          <Btn svgId="basket">سفارش بده</Btn>
          <div className="flex-center flex-col">
            <b>{product.price.toLocaleString()}</b>
            <Icon id="toman" className="size-5 text-caramel" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCardRectangle;
