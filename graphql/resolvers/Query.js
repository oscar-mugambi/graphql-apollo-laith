const { products, categories } = require('../../datastore');

exports.Query = {
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    const id = args.productId;
    return products.find((product) => product.id === id);
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, ctx) => {
    console.log(parent);
    return categories.find((category) => category.id === args.id);
  },
};
