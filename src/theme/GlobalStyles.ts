import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
text-align: center;
  font-weight: 400;
  & h1 {
    font-family: "Roboto", sans-serif;
  };
  & h2 {
    font-family: "Pangolin", sans-serif;
  };
`;