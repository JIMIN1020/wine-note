import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    button {
        background: none;
        border: none;
        box-sizing: content-box;
    }
    body {
        margin: 0;
        font-family: "Pretendard";
        background-color: #45007b;
    }
`;
