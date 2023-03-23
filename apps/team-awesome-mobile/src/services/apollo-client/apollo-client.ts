// eslint-disable-next-line import/no-unresolved
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Platform } from "react-native";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: Platform.OS === "ios" ? "http://localhost:3333" : "http://10.0.2.2:3333",
});
