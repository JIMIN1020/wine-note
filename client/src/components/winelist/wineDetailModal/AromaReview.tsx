import React from 'react';
import styled from 'styled-components';
import TextLine from '../../common/TextLine';
import NoteLayout from '../../layout/NoteLayout';
import useStore from '../../../store/store';
import { AROMA_INTENSITY, AromaKeys } from '../../../constants/aroma';

const AromaReview = () => {
  const { selectedWine } = useStore();
  return (
    <NoteLayout title='Aroma' sub='향'>
      <Content>
        <TextLine
          title='Intensity'
          text={`${selectedWine!.review.aroma_intensity} - ${AROMA_INTENSITY[selectedWine!.review.aroma_intensity as AromaKeys]}`}
        />
        <TextLine title='Aroma' text={selectedWine!.review.aroma} />
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
