import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --bg: #E5E5E5;
  }

  @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  body {
    background: var(--bg);
    /* color: var(--white); */
  }

  body, input, textarea, select, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;