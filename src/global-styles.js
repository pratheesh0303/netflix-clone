import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    --webkit-font-smootening: antialiased;
    --moz-osx-font-smoothening: grayscale;
    background-color black;
    color: #333333;
    font-size: 16px;   
}
button {
    border: 1px solid transparent;
}
`;