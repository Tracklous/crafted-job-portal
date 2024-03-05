import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  text-align: center;
  font-weight: 400;
   :root {
    font-family: "Montserrat", "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: black;
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
  };

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  };

  h1, h2, h3, h4, h5, h6 {
    color: black;
    margin: 0;
    font-family: "Montserrat", "Roboto", sans-serif;
  };

  p {
    color: black;
    margin: 0;
    font-family: "Montserrat", "Roboto", sans-serif;
  }

  button {
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.3em 1em;
  font-size: 1.1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${({ theme }) => theme.palette.bgDefault};
  cursor: pointer;
};

button:hover {
  border-color: #646cff;
};

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
};

`;