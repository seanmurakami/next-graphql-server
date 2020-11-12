import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

//Create a new instance of Apollo Server to create our GraphQL Server
const apolloServer = new ApolloServer({ typeDefs, resolvers });

//Inform Next.js not to parse incoming request data
//GraphQL will handle that for us
export const config = {
  api: {
    bodyParser: false
  }
};

//Create a new handler that allows api/graphql to be our entry point for our server
export default apolloServer.createHandler({ path: "/api/graphql" });
