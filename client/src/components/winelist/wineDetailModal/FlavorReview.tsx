import React from 'react';
import NoteLayout from '../../layout/NoteLayout';
import styled from 'styled-components';
import TextLine from '../../common/TextLine';
import CharacteristicChart from './CharacteristicChart';
import useStore from '../../../store/store';

const FlavorReview = () => {
  const { selectedWine } = useStore();
  return (
    <NoteLayout title='Flavor' sub='맛'>
      <Content>
        <CharacteristicChart />
        <TextLine title='Flavor' text={selectedWine!.review.flavor} />
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
