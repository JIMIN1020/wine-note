import React from 'react';
import styled from 'styled-components';

const Login: React.FC = () => {
  return <Container>안녕하세요? hellloooo</Container>;
};

export default Login;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: white;
`;
