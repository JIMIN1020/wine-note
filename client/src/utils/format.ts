export const formatPrice = (price: number) => {
  if (price % 1 !== 0) {
    return price.toFixed(1).toLocaleString();
  } else {
    return price.toLocaleString();
  }
};
