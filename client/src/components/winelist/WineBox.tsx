import React from 'react';
import styled from 'styled-components';
import Wine from '../common/Wine';

const WineBox = () => {
  return (
    <Container>
      <Wine />
      <Wine />
      <Wine />
      <Wine />
    </Container>
  );
};

export default WineBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
