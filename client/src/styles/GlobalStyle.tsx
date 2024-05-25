import styled, { createGlobalStyle, css } from 'styled-components';
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
        cursor: pointer;
    }
    body {
        margin: 0;
        font-family: "Pretendard";
        background-color: #ffffff;
        position: relative;
        color: #1E1E1E;
    }
`;

export const defaultWidth = css`
  width: 100%;
  max-width: 1350px;
  padding: 0px 50px;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepContainer = styled.div`
  width: 720px;
  height: 100%;
  padding: 0 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
