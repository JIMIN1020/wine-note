import React from 'react';
import styled from 'styled-components';
import ChartBar from './ChartBar';
import { useWine } from '@/hooks/useWine';
import NoteItem from '../NoteItem';
import { FaRegFaceGrinTongue } from 'react-icons/fa6';

const CharacteristicChart = () => {
  const { wineDetailData } = useWine();
  return (
    <NoteItem
      icon={<FaRegFaceGrinTongue size={20} />}
      title='Flavor Characteristic'
      type='column'
    >
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
    </NoteItem>
  );
};

export default CharacteristicChart;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0px;
`;
