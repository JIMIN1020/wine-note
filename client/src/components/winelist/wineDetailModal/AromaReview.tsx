import React from 'react';
import styled from 'styled-components';
import TextLine from '../../common/TextLine';
import NoteLayout from '../../layout/NoteLayout';

const AromaReview = () => {
  return (
    <NoteLayout title='Aroma' sub='향'>
      <Content>
        <TextLine title='Intensity' text='Light — 미미한 향' />
        <TextLine title='Aroma' text='청사과, 오크, 버터, 배, 시트러스' />
      </Content>
    </NoteLayout>
  );
};

export default AromaReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 6px;
`;
