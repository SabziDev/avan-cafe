import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "../components/Head";
import DrinkProductsSection from "./sections/DrinkProductsSection/DrinkProductsSection";
import HomeHeaderSection from "./sections/HomeHeaderSection/HomeHeaderSection";
import ProductsTypesSection from "./sections/ProductsTypesSection/ProductsTypesSection";
import WhyAvanSectiom from "./sections/WhyAvanSection/WhyAvanSection";

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
      <WhyAvanSectiom />
    </>
  );
};

export default Home;
