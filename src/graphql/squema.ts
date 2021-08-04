import { gql } from "apollo-server";
import { userResolvers } from "./user/resolvers";
import { userTypeDefs } from "./user/typedefs";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => "Está vazio amigo ;)",
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
