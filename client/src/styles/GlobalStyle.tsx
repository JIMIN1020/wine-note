import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
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

export const fadein = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 5%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const StyledInput = styled.input`
  border: 1.5px solid ${({ theme }) => theme.colors.border_gray};
  padding: 10px 12px;
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1.5px solid ${({ theme }) => theme.colors.wine_purple};
  }
`;

export const StyledInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: ${({ theme }) => theme.fontSize.base};

  & span {
    font-weight: 600;
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border_gray};
  margin-top: 10px;
  margin-bottom: 16px;
`;

export const StepContainer = styled.div`
  width: 720px;
  height: 100%;
  padding: 0 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
