import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/w5hr8ul3sv67/environments/master`,
  headers: {
    Authorization: `Bearer RMPCkZYfSPQZbYigLfmc_dH8CNPtNrbJmyZOCJKMDME`,
  },
  cache: new InMemoryCache(),
});

export default client;
