import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [pwFocused, setPwFocused] = useState<boolean>(false);
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  return (
    <Container>
      <InputContainer>
        <InputWrapper>
          <StyledInput
            type='text'
            value={value.email}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
          <InputTitle $isFocused={emailFocused}>EMAIL</InputTitle>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type='text'
            value={value.password}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, password: e.target.value }))
            }
            onFocus={() => setPwFocused(true)}
            onBlur={() => setPwFocused(false)}
          />
          <InputTitle $isFocused={pwFocused}>PASSWORD</InputTitle>
        </InputWrapper>
      </InputContainer>

      <LoginButton disabled={value.email === '' || value.password === ''}>
        로그인
      </LoginButton>
    </Container>
  );
};

export default LoginForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.border_gray};
  padding: 16px 16px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.wine_purple};
  }
`;

const InputTitle = styled.span<{ $isFocused: boolean }>`
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme, $isFocused }) =>
    $isFocused ? theme.colors.wine_purple : theme.colors.font_gray};
  font-size: ${({ theme }) => theme.fontSize.base};
  position: absolute;
  padding: 0 6px;
  top: -5px;
  left: 16px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.font_white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.font_gray};
    background-color: ${({ theme }) => theme.colors.bg_lightgray};
  }
`;
