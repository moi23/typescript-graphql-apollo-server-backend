import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./graphql/squema";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.listen(4003).then(({ url }: any) => {
  console.log(`🟢 Server Listening on url ${url}graphql`);
});
