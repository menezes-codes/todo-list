import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
    width: 100%;
    background-color: var(--color-background);
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  :root{
    --color-background: #1c1c1c;
    --color-border: #736d5a;
    --color-button-background: #5c5346;
    --color-button-text: #ede8d5;
    --color-edit: #6A9955;
    --color-completed: #D18B47;
    --color-delete: #A64D4D;
    --color-text-principal: #f5f5f5;
    --color-text-description: #d1cdc5;
    --color-sucess: #229A00
  }

`;

export default GlobalStyles;
