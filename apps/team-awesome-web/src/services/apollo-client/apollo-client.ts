import { ApolloClient, createHttpLink, InMemoryCache, useQuery } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:3333",
  }),
  cache: new InMemoryCache(),
});

const { data: timeEntryData } = useQuery(GET_TIME_ENTRIES);
