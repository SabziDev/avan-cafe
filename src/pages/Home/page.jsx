import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "../components/Head";
import BaristaSuggestionSection from "./sections/BaristaSuggestionSection/BaristaSuggestionSection";
import DrinkProductsSection from "./sections/DrinkProductsSection/DrinkProductsSection";
import FastFoodSection from "./sections/FastFoodSection/FastFoodSection";
import HomeHeaderSection from "./sections/HomeHeaderSection/HomeHeaderSection";
import ProductsTypesSection from "./sections/ProductsTypesSection/ProductsTypesSection";
import ReserveYourTableSection from "./sections/ReserveYourTableSection/ReserveYourTableSection";
import TodayDiscountSection from "./sections/TodayDiscountSection/TodayDiscountSection";
import WhyAvanSection from "./sections/WhyAvanSection/WhyAvanSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>{pagesMeta.home.title}</title>
        <meta name="description" content={pagesMeta.home.desc} />
      </Head>

      <HomeHeaderSection />
      <ProductsTypesSection />
      <DrinkProductsSection />
      <WhyAvanSection />
      <ReserveYourTableSection />
      <BaristaSuggestionSection />
      <FastFoodSection />
      <TodayDiscountSection />
    </>
  );
};

export default Home;
