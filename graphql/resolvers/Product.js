const { categories } = require('../../datastore');

exports.Product = {
  category: (parent, args, ctx) => {
    return categories.find((category) => category.id === parent.categoryId);
  },
};
