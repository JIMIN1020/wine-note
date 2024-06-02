import React from 'react';
import styled from 'styled-components';
import ChartBar from './ChartBar';
import useStore from '../../../store/store';

const CharacteristicChart = () => {
  const { selectedWine } = useStore();
  return (
    <Container>
      <ChartBar left='Light' right='Full' num={selectedWine!.review.body} />
      <ChartBar left='Dry' right='Sweet' num={selectedWine!.review.sweetness} />
      <ChartBar
        left='Smooth'
        right='Tannic'
        num={selectedWine!.review.tannin}
      />
      <ChartBar left='Soft' right='Acidic' num={selectedWine!.review.acidity} />
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
