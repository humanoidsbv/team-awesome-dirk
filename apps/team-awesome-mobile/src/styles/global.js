import { createGlobalStyle } from "styled-components/native";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  body {
    background-color: ${({ theme }) => theme.backgroundTertiary};
    font-family: ${({ theme }) => theme.fontPrimary};
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
  src: url("/fonts/proxima-nova-bold.ttf") format("truetype");
}
`;

export default GlobalStyle;
