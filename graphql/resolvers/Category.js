const { products } = require('../../datastore');

exports.Category = {
  products: (parent, args, ctx) => {
    console.log(parent);
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
