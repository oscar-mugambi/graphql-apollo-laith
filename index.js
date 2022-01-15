const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type hello {
    greeting: [String!]!
  }

  type Query {
    hello: hello
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return { greeting: [] };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('server is running at ' + url);
});
