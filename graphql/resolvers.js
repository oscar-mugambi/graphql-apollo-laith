const { products, categories } = require('../datastore');

exports.resolvers = {
  Query: {
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
  },

  Category: {
    products: (parent, args, ctx) => {
      console.log(parent);
      const categoryId = parent.id;
      return products.filter((product) => product.categoryId === categoryId);
    },
  },

  Product: {
    category: (parent, args, ctx) => {
      return categories.find((category) => category.id === parent.categoryId);
    },
  },
};
