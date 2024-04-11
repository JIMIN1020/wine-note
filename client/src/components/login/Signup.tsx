import React from 'react';
import FormTitle from '../common/FormTitle';
import SignupForm from './SignupForm';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';

interface SignupProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup = ({ setSignUp }: SignupProps) => {
  return (
    <>
      <FormTitle title='Sign Up' sub='회원가입하고 와인 기록을 시작해보세요!' />
      <SignupForm />
      <LoginButton type='button' onClick={() => setSignUp(false)}>
        <IoMdArrowBack size={18} style={{ marginBottom: '2px' }} />
        로그인하러 가기
      </LoginButton>
    </>
  );
};

export default Signup;

const LoginButton = styled.button`
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
