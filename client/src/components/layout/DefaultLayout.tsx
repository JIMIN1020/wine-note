import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
  display: flex;
  justify-content: center;
`;
