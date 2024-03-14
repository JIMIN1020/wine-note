import React from 'react';
import styled from 'styled-components';
import Banner from '../components/login/Banner';
import LoginBox from '../components/login/LoginBox';

const LoginPage = () => {
  return (
    <Container>
      <Banner />
      <LoginBox />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  display: flex;
`;
