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
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  type Query {
    products(filter: ProductsFilterInput): [Product!]
    product(productId: ID!): Product
    category(id: ID!): Category!
    categories: [Category!]!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;
