import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface FormInputProps {
  type?: string;
  inputName: string;
  placeholder: string;
  showError?: boolean;
  options?: {
    required?: boolean;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    validate?: (v: string) => boolean | string;
  };
}

const FormInput = ({
  type = 'text',
  inputName,
  placeholder,
  options,
  showError = false,
}: FormInputProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const [focused, setFocused] = useState<boolean>(false);
  const { register } = useFormContext();
  return (
    <InputWrapper onBlur={() => setFocused(false)}>
      <InputTitle $isFocused={focused}>{inputName.toUpperCase()}</InputTitle>
      <StyledInput
        type={type}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        {...register(inputName, options)}
      />
      {showError && (
        <ErrorMessage
          errors={errors}
          name={inputName}
          render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
        />
      )}
    </InputWrapper>
  );
};

export default FormInput;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
    $isFocused ? theme.colors.wine_purple : theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  position: absolute;
  padding: 0 6px;
  top: -5px;
  left: 16px;
`;

const ErrorMsg = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: red;
`;
