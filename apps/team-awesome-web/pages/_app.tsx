import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { client } from "../src/services/apollo-client/apollo-client";
import { StoreProvider } from "../src/components/store-context/StoreContext";
import { theme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
