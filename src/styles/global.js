import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   }

    body{
        -webkit-font-smoothing: antialiased;  
    }

    body, input, button{
        font: 14px comic-sans, sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
    }

    body{
        background-color: black;
    }
`;