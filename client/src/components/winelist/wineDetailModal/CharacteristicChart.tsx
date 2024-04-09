import React from 'react';
import styled from 'styled-components';
import ChartBar from './ChartBar';

const CharacteristicChart = () => {
  return (
    <Container>
      <ChartBar left='Light' right='Full' num={1} />
      <ChartBar left='Light' right='Full' num={2} />
      <ChartBar left='Light' right='Full' num={5} />
      <ChartBar left='Light' right='Full' num={3} />
    </Container>
  );
};

export default CharacteristicChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px 30px 30px 30px;
`;
