import products from "./products";

const allProducts = [
  ...products.drinks,
  ...products.cake,
  ...products.fastFood,
];

const todayChairProducts = allProducts
  .toSorted(() => Math.random() - 0.5)
  .slice(0, 10);

export default todayChairProducts;
