import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}

a {
    text-decoration : none;
    color:inherit;
}

body {
    font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
    font-size : 16px;
    background-color : #ffffff;
    color : #303030;
    padding-top: 50px ;
    overflow-x : hidden;
}

`;

export default GlobalStyle;
