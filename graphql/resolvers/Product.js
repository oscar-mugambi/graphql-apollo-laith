exports.Product = {
  category: (parent, _args, { categories }) => {
    return categories.find((category) => category.id === parent.categoryId);
  },

  reviews: ({ id }, _args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
