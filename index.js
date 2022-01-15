const { ApolloServer } = require('apollo-server');
const { Query } = require('./graphql/resolvers/Query');
const { Product } = require('./graphql/resolvers/Product');
const { Category } = require('./graphql/resolvers/Category');

const { typeDefs } = require('./graphql/schema');

const { products, categories, reviews } = require('./datastore');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log('server is running at ' + url);
});
