import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";
import { StoreProvider } from "../src/components/store-context/StoreContext";

function MyApp({ Component, ...pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
