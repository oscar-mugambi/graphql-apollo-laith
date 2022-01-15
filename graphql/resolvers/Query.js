exports.Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter.onSale === true) {
      if (filter.onSale) {
        console.log('filtering');
        return filteredProducts.filter((product) => product.onSale);
      }
    }

    return filteredProducts;
  },
  product: (parent, args, { products }) => {
    const id = args.productId;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, args, { categories }) => {
    console.log(parent);
    return categories.find((category) => category.id === args.id);
  },
};
