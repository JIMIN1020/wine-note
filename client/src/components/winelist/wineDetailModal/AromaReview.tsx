import React from 'react';
import styled from 'styled-components';
import { RiColorFilterLine } from 'react-icons/ri';
import { AROMA_INTENSITY, AromaKeys } from '@/constants/aroma';
import { useWine } from '@/hooks/useWine';
import NoteItem from './NoteItem';

const AromaReview = () => {
  const { wineDetailData } = useWine();
  return (
    <Content>
      <NoteItem icon={<RiColorFilterLine size={22} />} title='Aroma Intensity'>
        <span>{`${wineDetailData!.review.aroma_intensity} - ${AROMA_INTENSITY[wineDetailData!.review.aroma_intensity as AromaKeys]}`}</span>
      </NoteItem>
      <NoteItem icon={<RiColorFilterLine size={22} />} title='Aroma'>
        <span>{wineDetailData!.review.aroma}</span>
      </NoteItem>
    </Content>
  );
};

export default AromaReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
