import React from 'react';
import styled from 'styled-components';
import { useWine } from '@/hooks/useWine';
import NoteItem from './NoteItem';
import { FaRegFaceGrinTongue } from 'react-icons/fa6';

const FlavorReview = () => {
  const { wineDetailData } = useWine();
  return (
    <Content>
      <NoteItem icon={<FaRegFaceGrinTongue size={20} />} title='Flavor'>
        <span>{wineDetailData!.review.flavor}</span>
      </NoteItem>
    </Content>
  );
};

export default FlavorReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
