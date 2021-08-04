import { gql } from "apollo-server";

export const postTypeDefs = gql`
  # Quando é um subQuery tem que ter um
  # extend pois só pode ter um type Query
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String
  }
`;
