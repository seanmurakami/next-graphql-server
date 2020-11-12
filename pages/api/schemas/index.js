import { gql } from "apollo-server-micro";

//Define a User type the describes the shape of a Github user
export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String): User!
  }
`;
