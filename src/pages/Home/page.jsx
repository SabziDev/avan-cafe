import Head from "@/layouts/components/Head";

import BaristaSuggestionSection from "./sections/BaristaSuggestionSection/section";
import BlogSection from "./sections/BlogSection/section";
import DessertsSection from "./sections/DessertsSection/section";
import DrinksSection from "./sections/DrinksSection/section";
import FastFoodSection from "./sections/FastFoodSection/section";
import HeaderSection from "./sections/HeaderSection/section";
import ProductsTypesSection from "./sections/ProductsTypesSection/section";
import ReserveYourTableSection from "./sections/ReserveYourTableSection/section";
import TagUsSection from "./sections/TagUsSection/section";
import TodayDiscountSection from "./sections/TodayDiscountSection/section";
import WhyAvanSection from "./sections/WhyAvanSection/section";

const Home = () => {
  return (
    <>
      <Head />

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
