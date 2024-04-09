import React from 'react';
import NoteLayout from '../../layout/NoteLayout';
import styled from 'styled-components';
import TextLine from '../../common/TextLine';
import CharacteristicChart from './CharacteristicChart';

const FlavorReview = () => {
  return (
    <NoteLayout title='Flavor' sub='맛'>
      <Content>
        <CharacteristicChart />
        <TextLine
          title='Flavor'
          text='부드러운 타닌, 적당한 산도, 과일향이 지배적임'
        />
      </Content>
    </NoteLayout>
  );
};

export default FlavorReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
