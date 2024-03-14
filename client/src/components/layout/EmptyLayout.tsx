import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const EmptyLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default EmptyLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
