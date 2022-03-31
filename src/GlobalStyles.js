import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: rgba(#C5CAE9, 0.4);
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: #3f51b5;
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
`;
