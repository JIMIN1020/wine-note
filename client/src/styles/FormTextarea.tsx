import styled from 'styled-components';

export const FormTextarea = styled.textarea`
  width: 500px;
  height: 200px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  border-radius: 10px;
  padding: 20px;
  font-family: 'Pretendard';
  line-height: 160%;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.wine_purple};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
