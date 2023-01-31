import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  @font-face {
  font-family: "Bello";
  src: url("/fonts/bello-script.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
  src: url("/fonts/proxima-nova-regular.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: lighter;
  src: url("/fonts/proxima-nova-light.ttf") format("truetype");
}

@font-face {
   font-family: "Proxima Nova";
  font-style: normal;
  font-weight: bold;
  src: url("/fonts/proxima-nova-bold") format("truetype");
}
`;

export default GlobalStyle;
