import React from 'react';
import styled from 'styled-components';
import TextLine from '../../common/TextLine';
import NoteLayout from '../../layout/NoteLayout';
import { AROMA_INTENSITY, AromaKeys } from '../../../constants/aroma';
import { useWine } from '@/hooks/useWine';

const AromaReview = () => {
  const { wineDetailData } = useWine();
  return (
    <NoteLayout title='Aroma' sub='향'>
      <Content>
        <TextLine
          title='Intensity'
          text={`${wineDetailData!.review.aroma_intensity} - ${AROMA_INTENSITY[wineDetailData!.review.aroma_intensity as AromaKeys]}`}
        />
        <TextLine title='Aroma' text={wineDetailData!.review.aroma} />
      </Content>
    </NoteLayout>
  );
};

export default AromaReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
