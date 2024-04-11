import React from 'react';
import LoginForm from './LoginForm';
import { AiOutlineUser } from 'react-icons/ai';
import styled from 'styled-components';
import FormTitle from '../common/FormTitle';

const Login = () => {
  return (
    <>
      <FormTitle title='Log In' sub='로그인하고 와인 기록을 관리해보세요' />
      <LoginForm />
      <SignupButton>
        <AiOutlineUser size={20} />
        회원가입
      </SignupButton>
    </>
  );
};

export default Login;

const SignupButton = styled.button`
  color: ${({ theme }) => theme.colors.font_gray};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  border: none;

  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c3c3c353;
  }
`;
