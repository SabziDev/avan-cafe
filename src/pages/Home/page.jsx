import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "../components/Head";
import BaristaSuggestionSection from "./sections/BaristaSuggestionSection/BaristaSuggestionSection";
import BlogSection from "./sections/BlogSection/BlogSection";
import DessertSection from "./sections/DessertSection/DessertSection";
import DrinkProductsSection from "./sections/DrinkProductsSection/DrinkProductsSection";
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
      <DrinkProductsSection />
      <WhyAvanSection />
      <ReserveYourTableSection />
      <BaristaSuggestionSection />
      <FastFoodSection />
      <TodayDiscountSection />
      <TagUsSection />
      <DessertSection />
      <BlogSection />
    </>
  );
};

export default Home;
