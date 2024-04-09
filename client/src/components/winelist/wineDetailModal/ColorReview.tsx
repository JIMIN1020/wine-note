import React from 'react';
import NoteLayout from '../../layout/NoteLayout';
import TextLine from '../../common/TextLine';
import styled from 'styled-components';

const ColorReview = () => {
  return (
    <NoteLayout title='Color' sub='색'>
      <Content>
        <TextLine title='Color' text='Yellow' />
        <TextLine title='Intensity' text='Medium' />
      </Content>
    </NoteLayout>
  );
};

export default ColorReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 6px;
`;
