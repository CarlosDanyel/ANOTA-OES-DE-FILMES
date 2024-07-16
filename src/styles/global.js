import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUNDPAGE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      outline: none;
  }
  
  button, a {
    cursor: pointer;
    text-decoration: none;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
