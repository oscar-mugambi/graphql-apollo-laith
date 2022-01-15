const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Query {
    products: [Product!]
    product(productId: ID!): Product
    category(id: ID!): Category!
    categories: [Category!]!
  }
`;
