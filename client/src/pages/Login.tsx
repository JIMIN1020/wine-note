import React from 'react';
import styled from 'styled-components';
import Banner from '../components/login/Banner';
import { FcGoogle } from 'react-icons/fc';

const Login: React.FC = () => {
  return (
    <Container>
      <Banner />
      <LoginContainer>
        <LoginTitle>
          <h2>Log In</h2>
          <span>로그인하고 와인 기록을 작성해보세요</span>
        </LoginTitle>

        <GoogleLogin>
          <FcGoogle />
          Google로 시작하기
        </GoogleLogin>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  display: flex;
`;

const LoginContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 60px 0px 0px 60px;
  padding: 100px 50px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.font_black};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  & h2 {
    font-size: 34px;
    font-weight: 700;
  }

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const GoogleLogin = styled.button`
  width: 200px;
  border: 1px solid lightgray;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background-color: #f3f3f3;
  }

  margin: 100px 0px;
`;
