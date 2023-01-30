import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
