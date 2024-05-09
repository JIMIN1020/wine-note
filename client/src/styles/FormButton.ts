import styled from 'styled-components';

export const FormButton = styled.button`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.text_gray};
    background-color: ${({ theme }) => theme.colors.bg_lightgray};
  }
`;
