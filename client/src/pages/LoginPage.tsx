import React from 'react';
import styled from 'styled-components';
import Banner from '../components/login/Banner';
import FormBox from '../components/login/FormBox';

const LoginPage = () => {
  return (
    <Container>
      <Banner />
      <FormBox />
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
