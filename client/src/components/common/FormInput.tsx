import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface FormInputProps {
  inputName: string;
  placeholder: string;
}

const FormInput = ({ inputName, placeholder }: FormInputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { register } = useFormContext();
  return (
    <InputWrapper onBlur={() => setFocused(false)}>
      <StyledInput
        type='text'
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        {...register(inputName)}
      />
      <InputTitle $isFocused={focused}>{inputName.toUpperCase()}</InputTitle>
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
