import "react-native-gesture-handler";

import { ApolloProvider } from "@apollo/client";
import { AppRegistry } from "react-native";
import { client } from "../services/apollo-client/apollo-client";

import { StackNavigator } from "../navigation/stack-navigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components/native";
import React from "react";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
AppRegistry.registerComponent("Team-Awesome-Mobile", () => App);
export default App;
