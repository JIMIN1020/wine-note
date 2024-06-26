import React from 'react';
import styled from 'styled-components';
import { useWine } from '@/hooks/useWine';
import NoteItem from './NoteItem';
import { MdInvertColors } from 'react-icons/md';

const ColorReview = () => {
  const { wineDetailData } = useWine();
  return (
    <Content>
      <NoteItem icon={<MdInvertColors size={22} />} title='Color'>
        <Color $color={wineDetailData!.review.color} />
      </NoteItem>
      <NoteItem icon={<MdInvertColors size={22} />} title='Color Intensity'>
        <span>{wineDetailData!.review.color_intensity}</span>
      </NoteItem>
    </Content>
  );
};

export default ColorReview;

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Color = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;
