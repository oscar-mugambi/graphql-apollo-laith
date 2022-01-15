const { ApolloServer } = require('apollo-server');
const { Query } = require('./graphql/resolvers/Query');
const { Product } = require('./graphql/resolvers/Product');
const { Category } = require('./graphql/resolvers/Category');

const { typeDefs } = require('./graphql/schema');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
});

server.listen().then(({ url }) => {
  console.log('server is running at ' + url);
});
