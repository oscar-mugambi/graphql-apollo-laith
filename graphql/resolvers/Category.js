exports.Category = {
  products: (parent, { filter }, { products }) => {
    const categoryId = parent.id;
    const categoryProducts = products.filter((product) => product.categoryId === categoryId);

    let filteredCategoryProducts = categoryProducts;

    if (filter.onSale === true) {
      if (filter.onSale) {
        console.log('filtering');
        return filteredCategoryProducts.filter((product) => product.onSale);
      }
    }

    return filteredCategoryProducts;
  },
};
