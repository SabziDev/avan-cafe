import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "../components/Head";
import DrinkProductsSection from "./sections/DrinkProductsSection/DrinkProductsSection";
import HomeHeaderSection from "./sections/HomeHeaderSection/HomeHeaderSection";
import ProductsTypesSection from "./sections/ProductsTypesSection/ProductsTypesSection";

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
    </>
  );
};

export default Home;
