import { gql } from "apollo-server";

export const userTypeDefs = gql`
  # Quando é um subQuery tem que ter um
  # extend pois só pode ter um type Query
  extend type Query {
    user: User!
    users: [User!]!
  }

  type User {
    id: ID!
    userName: String!
  }
`;
