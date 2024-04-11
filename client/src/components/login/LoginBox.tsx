import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { IoMdArrowForward } from 'react-icons/io';

const LoginBox: React.FC = () => {
  return (
    <LoginContainer>
      <Box>
        <LoginTitle>
          <h2>Log In</h2>
          <span>로그인하고 와인 기록을 작성해보세요</span>
        </LoginTitle>
        <LoginForm />
        <LookAroundBtn>
          둘러보기 <IoMdArrowForward />
        </LookAroundBtn>
      </Box>
    </LoginContainer>
  );
};

export default LoginBox;

const LoginContainer = styled.div`
  width: 50%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 60px 100px;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;

  & h2 {
    font-size: 34px;
    font-weight: 700;
  }

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const LookAroundBtn = styled.div`
  color: ${({ theme }) => theme.colors.font_gray};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-size: 600;

  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c3c3c353;
  }
`;
