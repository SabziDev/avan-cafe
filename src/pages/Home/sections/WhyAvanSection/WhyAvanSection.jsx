import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AvanInfo from "./AvanInfo/AvanInfo";
import Video from "./Video/Video";

const WhyAvanSection = () => {
  return (
    <section className="relative">
      <SectionTitle>چرا کافه آوان؟</SectionTitle>
      <div className="flex-items-center flex-col justify-between xl:flex-justify-center xl:items-start">
        <div className="flex-justify-center max-w-250 flex-col items-start gap-4 xl:flex-row">
          <AvanInfo />

          <Video />
        </div>
        <img
          src="/images/shapes/pages/home/why-avan-section/humberger.png"
          alt="humberger-section"
          className="absolute -left-15 mt-2 sm:-left-20 md:-left-60 md:-mt-12 md:scale-70 lg:-left-42 lg:scale-90 xl:-left-110 xl:scale-90 2xl:-left-80 2xl:scale-100"
        />
      </div>
    </section>
  );
};

export default WhyAvanSection;
