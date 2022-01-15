const { reviews } = require('../../datastore');

exports.Query = {
  products: (_parent, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        console.log('filtering');
        return filteredProducts.filter((product) => product.onSale);
      }
      console.log(avgRating);

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          // let sumRating = 0;
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (_parent, args, { products }) => {
    const id = args.productId;
    return products.find((product) => product.id === id);
  },
  categories: (_parent, _args, { categories }) => {
    return categories;
  },
  category: (_parent, args, { categories }) => {
    return categories.find((category) => category.id === args.id);
  },
};
