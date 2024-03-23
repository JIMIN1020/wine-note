import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  padding: 10px 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 20px 0px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.wine_purple};
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

export const LabelInputWrapper = styled.div`
  position: relative;
`;

export const LabelInput = styled(StyledInput)`
  width: 100%;
  padding-left: 42px;
`;
