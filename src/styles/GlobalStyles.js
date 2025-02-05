import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  h2 {
    margin-bottom: 10px;
  }

  select, input, button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  img {
    border-radius: 8px;
  }

  .container {
    max-width: 800px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyles;
