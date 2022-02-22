/** @format */

export const byPriceHighest = (a, b) => {
  const PriceFirst = a.defaultProductVariant.price;
  const PriceSecond = b.defaultProductVariant.price;
  return PriceFirst - PriceSecond;
};

export const byPriceLowest = (a, b) => {
  const PriceFirst = a.defaultProductVariant.price;
  const PriceSecond = b.defaultProductVariant.price;
  return PriceSecond - PriceFirst;
};
