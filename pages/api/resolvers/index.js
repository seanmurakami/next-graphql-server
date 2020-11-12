import axios from "axios";

//A GraphQL resolver is a set of functions that allows you to generate a response from a GraphQL query.
export const resolvers = {
  Query: {
    //We match the query names (getUsers, getUser) we defined in teh schema with the resolver functions
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url
        }));
      } catch (err) {
        throw err;
      }
    },
    getUser: async (_, args) => {
      try {
        const user = await axios.get(`https://api/github.com/users/${args.name}`);
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url
        };
      } catch (err) {
        throw err;
      }
    }
  }
};
