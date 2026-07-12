import Btn from "@/components/Btn/Btn";
import Img from "@/components/Img/Img";

const BlogCard = ({ cardVariant = "vertical", data }) => {
  return cardVariant === "vertical" ? (
    <article className="flex-items-center h-100 w-70 flex-col justify-between rounded-3xl p-4 shadow-[0_0_6px_rgba(0,0,0,0.1)] md:w-85">
      <div className="flex-center flex-col">
        <Img
          src={data.imgSrc}
          alt="blog-card"
          loading="lazy"
          className="h-45 w-65 md:w-70"
        />
        <h3 className="mt-2 text-xl font-bold">{data.title}</h3>
        <p className="mt-2 text-lg text-primary/50">{data.desc}</p>
      </div>

      <div className="flex-items-center w-full justify-between">
        <div className="flex-center gap-2">
          <Img src={data.authorImgSrc} className="size-8" />
          <span className="text-primary/50">{data.author}</span>
        </div>
        <Btn svgId="arrow-medium">مطالعه</Btn>
      </div>
    </article>
  ) : (
    <article className="flex-items-center h-47.5 w-175 justify-between gap-10 rounded-3xl p-4 shadow-[0_0_6px_rgba(0,0,0,0.1)] 2xl:w-full">
      <Img
        src={data.imgSrc}
        alt="blog-card"
        loading="lazy"
        className="h-35 w-80"
      />

      <div className="flex-center flex-col gap-6">
        <div>
          <h3 className="mt-2 text-xl font-bold">{data.title}</h3>
          <p className="mt-2 text-lg text-primary/50">{data.desc}</p>
        </div>

        <div className="flex-items-center w-full justify-between">
          <div className="flex-center gap-2">
            <Img src={data.authorImgSrc} className="size-8" />
            <span className="text-primary/50">{data.author}</span>
          </div>
          <Btn svgId="arrow-medium">مطالعه</Btn>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
