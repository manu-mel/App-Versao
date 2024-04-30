const formatPrice = (price: string) => {
  if (price === '') {
    return;
  }

  const separator = price.indexOf('.');
  // R$ XX
  if (separator === -1) {
    return (price += '.00');
  } else {
    // R$ XX.X
    if (price.substring(separator, separator + 2).length === 2) {
      return (price += '0');
    }
    // R$ XX.XX
    return price;
  }
};

export default formatPrice;
