import React, { useState } from 'react';
import styled from 'styled-components';

interface FormInputProps {
  inputName: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

const FormInput = ({
  inputName,
  value,
  setValue,
  placeholder,
}: FormInputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <InputWrapper>
      <StyledInput
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />
      <InputTitle $isFocused={focused}>{inputName}</InputTitle>
    </InputWrapper>
  );
};

export default FormInput;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.border_gray};
  padding: 14px 16px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.wine_purple};
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const InputTitle = styled.span<{ $isFocused: boolean }>`
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme, $isFocused }) =>
    $isFocused ? theme.colors.wine_purple : theme.colors.font_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  position: absolute;
  padding: 0 6px;
  top: -5px;
  left: 16px;
`;
