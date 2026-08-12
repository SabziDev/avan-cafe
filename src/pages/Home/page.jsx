import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "../components/Head";
import BaristaSuggestionSection from "./sections/BaristaSuggestionSection/BaristaSuggestionSection";
import BlogSection from "./sections/BlogSection/BlogSection";
import DessertsSection from "./sections/DessertsSection/DessertsSection";
import DrinksSection from "./sections/DrinksSection/DrinksSection";
import FastFoodSection from "./sections/FastFoodSection/FastFoodSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import ProductsTypesSection from "./sections/ProductsTypesSection/ProductsTypesSection";
import ReserveYourTableSection from "./sections/ReserveYourTableSection/ReserveYourTableSection";
import TagUsSection from "./sections/TagUsSection/TagUsSection";
import TodayDiscountSection from "./sections/TodayDiscountSection/TodayDiscountSection";
import WhyAvanSection from "./sections/WhyAvanSection/WhyAvanSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>{pagesMeta.home.title}</title>
        <meta name="description" content={pagesMeta.home.desc} />
      </Head>

      <HeaderSection />
      <ProductsTypesSection />
      <DrinksSection />
      <WhyAvanSection />
      <ReserveYourTableSection />
      <BaristaSuggestionSection />
      <FastFoodSection />
      <TodayDiscountSection />
      <TagUsSection />
      <DessertsSection />
      <BlogSection />
    </>
  );
};

export default Home;
