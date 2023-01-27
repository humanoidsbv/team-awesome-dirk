import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  @font-face {
  font-family: "Bello";
  src: url("../public/fonts/bello-script.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
  src: url("../public/fonts/proxima-nova-regular.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: lighter;
  src: url("../public/fonts/proxima-nova-light.ttf") format("truetype");
}

:root {
  --clr-blue: #4F88EF;
  --clr-white: #FFFFFF;
  --fs-600: 1.5rem;
  --fs-400: 0.875rem;
  --fs-logo: 1.625rem;
}
`;

export default GlobalStyle;