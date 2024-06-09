import React from 'react';
import styled from 'styled-components';
import ChartBar from './ChartBar';
import { useWine } from '@/hooks/useWine';

const CharacteristicChart = () => {
  const { wineDetailData } = useWine();
  return (
    <Container>
      <ChartBar left='Light' right='Full' num={wineDetailData!.review.body} />
      <ChartBar
        left='Dry'
        right='Sweet'
        num={wineDetailData!.review.sweetness}
      />
      <ChartBar
        left='Smooth'
        right='Tannic'
        num={wineDetailData!.review.tannin}
      />
      <ChartBar
        left='Soft'
        right='Acidic'
        num={wineDetailData!.review.acidity}
      />
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
